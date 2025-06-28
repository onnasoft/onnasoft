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
import { generate } from "@/services/ai";
import { useAuthStore } from "@/hooks/useAuthStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FormData {
  initialContent: string;
  title: string;
  excerpt: string;
  contentInstructions: string;
  content: string;
  imageUrl: File | null;
  imagePrompt: string;
  published: boolean;
  published_date: Date | undefined;
}

const initialFormData: FormData = {
  initialContent: "",
  title: "",
  excerpt: "",
  contentInstructions: "",
  content: "",
  imagePrompt: "",
  imageUrl: null,
  published: false,
  published_date: undefined,
};

const BlogPostForm = () => {
  const auth = useAuthStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeTab, setActiveTab] = useState("summary");
  const [isLoading, setIsLoading] = useState(false);

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

  const getExcerpt = async (description: string, token: string) => {
    const prompt = `Given this topic: "${description}", write a short and engaging excerpt (max 250 characters) for a blog post.`;
    return await generate(prompt, token);
  };

  const getTitle = async (excerpt: string, token: string) => {
    const prompt = `Given this excerpt: "${excerpt}", generate an engaging blog post title. Return only plain text.`;
    return await generate(prompt, token);
  };

  const getContentInstructions = async (excerpt: string, token: string) => {
    const prompt = `Given this blog post excerpt: "${excerpt}", write detailed step-by-step instructions for 
      how to structure and write a high-quality blog post about it. 
      Respond in Markdown with: "introduction", "sections", "tone", and "tips".`;
    return await generate(prompt, token);
  };

  const getImagePrompt = async (excerpt: string, token: string) => {
    const prompt = `Based on this excerpt: "${excerpt}", generate a prompt for an image that visually represents 
    the blog post. Describe the scene in detail, without using any text.`;
    return await generate(prompt, token);
  };

  const handleNext = async () => {
    if (!auth.token) return;
    const { initialContent } = formData;

    if (!validateStep1()) return;

    setIsLoading(true);

    const { response: excerpt } = await getExcerpt(initialContent, auth.token);
    const { response: title } = await getTitle(excerpt, auth.token);
    const { response: contentInstructions } = await getContentInstructions(
      excerpt,
      auth.token
    );
    const { response: imagePrompt } = await getImagePrompt(excerpt, auth.token);

    setIsLoading(false);

    setFormData((prev) => ({
      ...prev,
      title,
      excerpt,
      contentInstructions,
      imagePrompt,
    }));

    if (step === 1) setStep(2);
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
                disabled={isLoading}
                onClick={handleNext}
              >
                Siguiente
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="summary">Resumen</TabsTrigger>
                <TabsTrigger value="instructions">Instrucciones</TabsTrigger>
                <TabsTrigger value="image">Imagen</TabsTrigger>
              </TabsList>

              <TabsContent value="summary" className="space-y-4">
                <div>
                  <Label
                    htmlFor="title"
                    className="block text-xl font-medium mb-2"
                  >
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
                    rows={5}
                    className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Un breve resumen que enganche al lector..."
                  />
                  {errors.excerpt && (
                    <p className="text-xl text-primary mt-1">
                      {errors.excerpt}
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="instructions" className="space-y-4">
                <div>
                  <Label
                    htmlFor="contentInstructions"
                    className="block text-xl font-medium mb-2"
                  >
                    Instrucciones para el Contenido
                  </Label>
                  <textarea
                    id="contentInstructions"
                    name="contentInstructions"
                    value={formData.contentInstructions}
                    onChange={handleChange}
                    rows={10}
                    className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Instrucciones generadas para crear el contenido..."
                  />
                </div>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <div>
                  <Label
                    htmlFor="imagePrompt"
                    className="block text-xl font-medium mb-2"
                  >
                    Prompt para Generar Imagen
                  </Label>
                  <textarea
                    id="imagePrompt"
                    name="imagePrompt"
                    value={formData.imagePrompt}
                    onChange={handleChange}
                    rows={8}
                    className="resize-y text-xl w-full border-primary border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Prompt generado para la imagen destacada..."
                  />
                </div>

                <div>
                  <Label
                    htmlFor="imageUrl"
                    className="block text-xl font-medium mb-2"
                  >
                    Subir Imagen Destacada
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
                    <p className="text-xl text-primary mt-1">
                      {errors.imageUrl}
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>

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
