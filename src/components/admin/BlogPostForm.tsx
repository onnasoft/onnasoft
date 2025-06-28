"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

interface FormData {
  initialContent: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: File | null;
  published: boolean;
  published_date: Date | undefined;
}

const initialFormData: FormData = {
  initialContent: "",
  title: "",
  excerpt: "",
  content: "",
  imageUrl: null,
  published: false,
  published_date: undefined,
};

const BlogPostForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, imageUrl: e.target.files![0] }));
      setErrors((prev) => ({ ...prev, imageUrl: "" }));
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, published_date: date }));
    setErrors((prev) => ({ ...prev, published_date: "" }));
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.initialContent.trim()) {
      newErrors.initialContent = "El contenido inicial es requerido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.title.trim()) {
      newErrors.title = "El título es requerido.";
    }
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "El resumen es requerido.";
    }
    if (!formData.content.trim()) {
      newErrors.content = "El contenido del post es requerido.";
    }
    if (formData.published && !formData.published_date) {
      newErrors.published_date =
        "La fecha de publicación es requerida si el post es publicado.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2 && validateStep2()) {
      console.log("Datos del formulario:", formData);
      alert("¡Formulario enviado con éxito! Revisa la consola.");
      setFormData(initialFormData);
      setStep(1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Crear Nuevo Post de Blog - Paso {step} de 2
      </h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <Label htmlFor="initialContent" className="font-medium text-xl">
              Escribe el contenido inicial o una idea para tu post:
            </Label>
            <textarea
              id="initialContent"
              name="initialContent"
              value={formData.initialContent}
              onChange={handleChange}
              rows={5}
              placeholder="Empieza a escribir tu idea o un borrador completo aquí..."
              className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.initialContent && (
              <p className="text-xl text-primary">{errors.initialContent}</p>
            )}
            <div className="flex justify-end">
              <Button
                type="button"
                className="bg-primary text-white hover:bg-primary/90 text-xl"
                onClick={handleNext}
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="block text-xl font-medium mb-2">
                Título del Post
              </Label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="El mejor título para tu blog post"
              />
              {errors.title && (
                <p className="text-xl text-primary mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor="excerpt"
                className="block text-xl font-medium mb-2"
              >
                Resumen / Excerpt
              </Label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={2}
                className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Un breve resumen que enganche al lector..."
              />
              {errors.excerpt && (
                <p className="text-xl text-primary mt-1">{errors.excerpt}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor="content"
                className="block text-xl font-medium mb-2"
              >
                Contenido Completo del Post
              </Label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={3}
                className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Escribe aquí el contenido detallado de tu post..."
              />
              {errors.content && (
                <p className="text-xl text-primary mt-1">{errors.content}</p>
              )}
            </div>

            <div>
              <Label
                htmlFor="imageUrl"
                className="block text-xl font-medium mb-2"
              >
                Imagen Destacada
              </Label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                onChange={handleFileChange}
                accept="image/*"
                className="block w-full text-xl text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xl file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              {formData.imageUrl && (
                <p className="text-xl text-gray-600 mt-2">
                  Archivo seleccionado: {formData.imageUrl.name}
                </p>
              )}
              {errors.imageUrl && (
                <p className="text-xl text-primary mt-1">{errors.imageUrl}</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="published"
                name="published"
                checked={formData.published}
                onCheckedChange={(checked: boolean) =>
                  setFormData((prev) => ({ ...prev, published: checked }))
                }
              />
              <Label
                htmlFor="published"
                className="text-xl font-medium text-primary"
              >
                Publicar Post
              </Label>
            </div>

            {formData.published && (
              <div>
                <Label
                  htmlFor="published_date"
                  className="block text-xl font-medium text-primary mb-2"
                >
                  Fecha de Publicación
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-[240px] justify-start text-left font-normal border-primary text-primary hover:bg-primary/10 ${
                        !formData.published_date && "text-muted-foreground"
                      }`}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.published_date
                        ? format(formData.published_date, "PPP", { locale: es })
                        : "Elige una fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.published_date}
                      onSelect={handleDateChange}
                      locale={es}
                    />
                  </PopoverContent>
                </Popover>
                {errors.published_date && (
                  <p className="text-xl text-primary mt-1">
                    {errors.published_date}
                  </p>
                )}
              </div>
            )}

            <div className="flex justify-between mt-6">
              <Button
                type="button"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-xl"
                onClick={handleBack}
              >
                Atrás
              </Button>
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 text-xl"
              >
                Crear Post
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogPostForm;
