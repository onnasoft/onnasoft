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
    return "React vs. Next.js: The Ultimate Showdown for Your Next Project";

    const prompt = `Given this excerpt: "${excerpt}", generate an engaging blog post title. Return only plain text.`;
    const { response } = await generate(prompt, auth.token!);

    console.log("Generated title:", response);

    return response;
  };

  const getExcerpt = async (description: string) => {
    return "React vs. Next.js: Which framework reigns supreme?  Unlock blazing-fast performance and SEO magic with Next.js, or stick with React's flexibility.  Find out which best fits YOUR project! #reactjs #nextjs #webdev";

    const prompt = `Given this topic: "${description}", write a short and engaging excerpt (max 250 characters) for a blog post.`;
    const { response } = await generate(prompt, auth.token!);

    console.log("Generated excerpt:", response);

    return response;
  };

  const getcontent = async (excerpt: string) => {
    return `Generated content instructions: ## React vs. Next.js: A Detailed Blog Post Outline

**Introduction:**

1. **Hook:** Start with a compelling hook that grabs the reader's attention.  This could be a question (e.g., "Is your next web project screaming for speed and SEO optimization?"), a surprising statistic (e.g., "Next.js projects load X% faster than comparable React apps."), or a relatable problem (e.g., "Choosing the right framework for your project can feel overwhelming...").

2. **Brief Overview:** Briefly introduce React and Next.js, highlighting their core functionalities.  Keep it concise and accessible to a broad audience – not just experienced developers.  Mention that this post will compare and contrast the two frameworks to help readers make an informed decision.

3. **Thesis Statement:** Clearly state the purpose of the blog post – to compare React and Next.js and guide readers towards choosing the best framework for their specific needs.  This could be something like: "This post will delve into a head-to-head comparison of React and Next.js, analyzing their strengths and weaknesses to help you determine which framework best suits your project's requirements."

**Sections:**

1. **What is React?**
    * Briefly explain React's core concepts: component-based architecture, virtual DOM, JSX.
    * Highlight its strengths: flexibility, vast community support, large ecosystem of libraries and tools, ease of learning for beginners.
    * Mention its weaknesses:  Requires additional libraries for routing, SEO can be challenging, potential for performance bottlenecks in complex applications.
    * Include examples (simple code snippets) to illustrate key features.

2. **What is Next.js?**
    * Briefly explain Next.js as a React framework.  Emphasize its server-side rendering (SSR) capabilities and features like static site generation (SSG).
    * Highlight its strengths: improved SEO, faster loading times, built-in routing, API routes, improved developer experience.
    * Mention its weaknesses:  Steeper learning curve than React alone, less flexibility than React, might be overkill for small, simple projects.
    * Include examples (simple code snippets) to illustrate key features, comparing them to equivalent React implementations.

3. **Head-to-Head Comparison:**
    * Create a table comparing React and Next.js across key features:
        * Performance (SSR, SSG, client-side rendering)
        * SEO
        * Routing
        * Development experience
        * Scalability
        * Community & Ecosystem
        * Learning Curve
    * Provide detailed explanations for each comparison point, justifying your assessment.  Use concrete examples where possible.


4. **Use Cases:**
    * Describe scenarios where React is the better choice (e.g., small projects, single-page applications, situations where maximum flexibility is needed).
    * Describe scenarios where Next.js is the better choice (e.g., large-scale applications, projects requiring high SEO performance, projects needing server-side rendering).

5. **Choosing the Right Framework:**
    * Offer a decision-making guide, possibly a flowchart or a series of questions, to help readers determine which framework suits their project's specific needs and goals.

6. **Conclusion:**
    * Briefly summarize the key takeaways from the comparison.
    * Reiterate the strengths of each framework and when to choose one over the other.
    * Offer a call to action (e.g., encourage readers to share their experiences, suggest further reading).


**Tone:**

* **Objective and Informative:** Avoid biased opinions; present facts and evidence to support your claims.
* **Clear and Concise:** Use simple language and avoid technical jargon where possible.  Explain technical terms clearly when necessary.
* **Engaging and Accessible:**  Maintain an engaging tone, using headings, subheadings, bullet points, and visuals (images, diagrams, code snippets) to make the content easy to digest.
* **Friendly and Helpful:**  Aim to provide a helpful and supportive experience for the reader.


**Tips:**

* **Use visuals:** Include diagrams, screenshots, and code snippets to illustrate key concepts and make the post more visually appealing.
* **Optimize for SEO:**  Use relevant keywords throughout the post (React, Next.js, JavaScript, web development, SEO, performance) and optimize the title and meta description.
* **Proofread carefully:** Ensure the post is free of grammatical errors and typos.
* **Get feedback:**  Before publishing, ask someone to review your post for clarity, accuracy, and engagement.
* **Promote your post:** Share your post on social media and other relevant platforms.
* **Include a call to action:** Encourage readers to leave comments, share the post, or visit your website.
* **Link to relevant resources:** Provide links to official documentation, tutorials, and other helpful resources.

By following these steps, you can create a high-quality and informative blog post that effectively compares React and Next.js and helps readers make an informed decision about which framework to use for their projects.`;

    const prompt = `Given this blog post excerpt: "${excerpt}", write detailed step-by-step instructions for how to structure and write a high-quality blog post about it. Respond in Markdown with: "introduction", "sections", "tone", and "tips".`;
    const { response } = await generate(prompt, auth.token!);

    console.log("Generated content instructions:", response);

    return response;
  };

  const getImagePrompt = async (excerpt: string) => {
    return "A split screen.  On one side, a vibrant, colorful, and slightly chaotic scene depicting a multitude of interconnected React components, wires, and code snippets – conveying flexibility and complexity.  On the other, a sleek, minimalist, and fast-loading webpage smoothly renders, with subtly glowing elements indicating optimized performance and SEO.  A spotlight shines brightly on the Next.js side, highlighting its speed and clean design.  The overall style is modern and clean, using bold but not overly distracting colors. The split is not perfectly even, with the Next.js side occupying slightly more space to emphasize its supposed superiority.";

    const prompt = `Based on this excerpt: "${excerpt}", generate a prompt for an image that visually represents the blog post. Describe the scene in detail, without using any text.`;
    const { response } = await generate(prompt, auth.token!);

    console.log("Generated image prompt:", response);

    return response;
  };

  const handleNext = async () => {
    if (!auth.token) return;

    setIsLoading(true);

    try {
      const excerpt = await getExcerpt(formData.initialContent);
      const [title, content, imagePrompt] = await Promise.all([
        getTitle(excerpt),
        getcontent(excerpt),
        getImagePrompt(excerpt),
      ]);

      setFormData((prev) => ({
        ...prev,
        title,
        excerpt,
        content,
        imagePrompt,
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
      imagePrompt: formData.imagePrompt,
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
