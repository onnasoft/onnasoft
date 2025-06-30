import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormData } from "../types";
import { Label } from "@/components/ui/label";
import TiptapEditor from "@/components/TiptapEditor";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Emoji from "@tiptap/extension-emoji";
import { marked } from "marked";
import TurndownService from "turndown";
import { Category } from "@/types/models";
import { getCategories } from "@/services/categories";
import DatePicker from "@/components/DatePicker";

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
    category_id: "",
    published: "",
    published_date: "",
    initialContent: "",
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const turndownService = useMemo(() => new TurndownService(), []);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2] } }),
      Emoji.configure({ enableEmoticons: true }),
    ],
    content: marked.parse(formData.content || ""),
    onUpdate({ editor }) {
      const markdown = turndownService.turndown(editor.getHTML());

      setFormData((prev) => ({
        ...prev,
        content: markdown,
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
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "El resumen es requerido.";
    }
    if (!formData.content.trim()) {
      newErrors.content = "El contenido es requerido.";
    }
    if (!formData.category_id) {
      newErrors.category_id = "La categoría es requerida.";
    }
    setErrors(newErrors);
    console.log("Validating form:", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(marked.parse(formData.content || ""));
    }
  }, [formData.content, editor]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories({
        limit: 100,
      });
      setCategories(categories.docs);
    };

    fetchCategories();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex flex-col flex-1"
      >
        <div className="bg-gray-100 pb-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="text-xl font-bold" value="summary">
              Resumen
            </TabsTrigger>
            <TabsTrigger className="text-xl font-bold" value="instructions">
              Instrucciones
            </TabsTrigger>
          </TabsList>
        </div>

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
              className="resize-y text-xl w-full border p-4 rounded-lg focus:outline-none"
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
              className="resize-y text-xl w-full border outline-0 p-4 rounded-lg"
              placeholder="Un breve resumen que enganche al lector..."
            />
            {errors.excerpt && (
              <p className="text-xl text-primary mt-1">{errors.excerpt}</p>
            )}
          </div>

          <div>
            <Label
              htmlFor="category"
              className="block text-xl font-medium mb-2"
            >
              Categoría del Post
            </Label>
            <select
              id="category"
              name="category"
              value={formData.category_id}
              onChange={(evt) => {
                const value = (evt.target as HTMLSelectElement).value;
                setFormData((prev) => ({
                  ...prev,
                  category_id: value ? parseInt(value, 10) : undefined,
                }));
                setErrors((prev) => ({ ...prev, category_id: "" }));
              }}
              className="text-xl w-full border outline-none bg-white p-4 rounded-lg"
            >
              <option value="" disabled>Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category_id && (
              <p className="text-xl text-primary mt-1">{errors.category_id}</p>
            )}
          </div>

          <div>
            <Label
              htmlFor="published_date"
              className="block text-xl font-medium mb-2"
            >
              Fecha de Publicación
            </Label>
            <DatePicker
              date={formData.published_date}
              onSelect={(date) => {
                setFormData((prev) => ({
                  ...prev,
                  published_date: date,
                }));
                setErrors((prev) => ({ ...prev, published_date: "" }));
              }}
            />
          </div>
        </TabsContent>

        <TabsContent value="instructions" className="space-y-4 flex-1 flex">
          <div className="flex flex-col flex-1">
            <Label htmlFor="content" className="block text-xl font-medium mb-2">
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
      </Tabs>

      {/* Sección de publicación y botones */}
      <div className="flex justify-between mt-6">
        <Button
          type="button"
          variant="outline"
          className="text-xl"
          onClick={onBack}
        >
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
