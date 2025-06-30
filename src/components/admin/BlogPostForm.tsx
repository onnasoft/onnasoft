"use client";

import React, { useState } from "react";
import { useAuthStore } from "@/hooks/useAuthStore";
import { generate } from "@/services/ai";
import { Scene1InitialContent } from "./scenes/Scene1InitialContent";
import { Scene2PostDetails } from "./scenes/Scene2PostDetails";
import { FormData, initialFormData } from "./types";
import { createPost } from "@/services/posts";

const BlogPostForm = () => {
  const auth = useAuthStore();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  // Funciones de generación de contenido
  const getTitle = async (excerpt: string) => {
    const prompt = `Given this excerpt: "${excerpt}", generate an engaging blog post title. Return only plain text.`;
    const { response } = await generate(prompt, auth.token!);

    return response;
  };

  const getExcerpt = async (description: string) => {
    const prompt = `Given this topic: "${description}", write a short and engaging excerpt (max 250 characters) for a blog post.`;
    const { response } = await generate(prompt, auth.token!);

    return response;
  };

  const getcontent = async (excerpt: string) => {
    const prompt = `Given this blog post excerpt: "${excerpt}", write detailed step-by-step instructions for how to structure and write a high-quality blog post about it. Respond in Markdown with: "introduction", "sections", "tone", and "tips".`;
    const { response } = await generate(prompt, auth.token!);

    return response;
  };

  const handleNext = async () => {
    if (!auth.token) return;

    setIsLoading(true);

    try {
      const excerpt = await getExcerpt(formData.initialContent);
      const [title, content] = await Promise.all([
        getTitle(excerpt),
        getcontent(excerpt),
      ]);

      setFormData((prev) => ({
        ...prev,
        title,
        excerpt,
        content,
      }));

      setStep(2);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Formulario enviado con éxito! Revisa la consola.");
    setFormData(initialFormData);
    setStep(1);

    const payload = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      published: formData.published,
      published_date: formData.published_date?.toISOString() ?? "",
    };

    await createPost(payload, auth.token!);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 flex flex-1 flex-col">
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
        Crear Nuevo Post de Blog - Paso {step} de 2
      </h2>

      {step === 1 ? (
        <Scene1InitialContent
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
          isLoading={isLoading}
        />
      ) : (
        <Scene2PostDetails
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default BlogPostForm;
