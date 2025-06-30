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

    if (!formData.initialContent.trim()) {
      setStep(2);
      return;
    }

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
    const payload = {
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category_id: formData.category_id,
      published: formData.published,
      published_date: formData.published_date?.toISOString() ?? "",
    };

    await createPost(payload, auth.token!);

    setFormData(initialFormData);
    setStep(1);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-primary mb-2">
          Crear Nuevo Post de Blog - Paso {step} de 2
        </h2>
      </div>

      <div className="mx-auto p-6 bg-white shadow-lg rounded-lg w-full flex flex-1 flex-col">
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
    </div>
  );
};

export default BlogPostForm;
