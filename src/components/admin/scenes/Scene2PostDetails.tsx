import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormData } from "../types";
import { Label } from "@/components/ui/label";
import TiptapEditor from "@/components/TiptapEditor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Emoji from "@tiptap/extension-emoji";
import { marked } from "marked";

interface Scene2Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export const Scene2PostDetails: React.FC<Scene2Props> = ({
  formData,
  setFormData,
  onSubmit,
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState("summary");
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    title: "",
    excerpt: "",
    content: "",
    imagePrompt: "",
    published: "",
    published_date: "",
    initialContent: "",
  });
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2] } }),
      Emoji.configure({ enableEmoticons: true }),
    ],
    content: marked.parse(formData.content || ""),
    onUpdate({ editor }) {
      setFormData((prev) => ({
        ...prev,
        content: editor.getHTML(),
      }));
      setErrors((prev) => ({ ...prev, content: "" }));
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = "El título es requerido.";
    if (!formData.excerpt.trim())
      newErrors.excerpt = "El resumen es requerido.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col flex-1"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="summary">Resumen</TabsTrigger>
          <TabsTrigger value="instructions">Instrucciones</TabsTrigger>
          <TabsTrigger value="image">Imagen</TabsTrigger>
        </TabsList>

        {/* Contenido de las pestañas */}
        <TabsContent value="summary" className="space-y-4 flex-1">
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
            <Label htmlFor="excerpt" className="block text-xl font-medium mb-2">
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
              <p className="text-xl text-primary mt-1">{errors.excerpt}</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="instructions" className="space-y-4 flex-1">
          <div className="flex flex-col flex-1">
            <Label
              htmlFor="content"
              className="block text-xl font-medium mb-2"
            >
              Instrucciones para el Contenido
            </Label>

            <TiptapEditor
              editor={editor}
              className="flex-1"
              placeholder="Instrucciones generadas para crear el contenido..."
            />
            {errors.content && (
              <p className="text-xl text-primary mt-1">{errors.content}</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="image" className="space-y-4 flex flex-1 flex-col">
          <div className="flex flex-col">
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
        </TabsContent>
      </Tabs>

      {/* Sección de publicación y botones */}
      <div className="flex justify-between mt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Atrás
        </Button>
        <Button
          className="bg-primary text-white hover:bg-primary/90 text-xl"
          type="submit"
        >
          Crear Post
        </Button>
      </div>
    </form>
  );
};
