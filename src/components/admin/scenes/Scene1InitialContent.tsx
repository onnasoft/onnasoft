import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FormData } from "../types";

interface Scene1Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
  isLoading: boolean;
}

export const Scene1InitialContent: React.FC<Scene1Props> = ({
  formData,
  setFormData,
  onNext,
  isLoading,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, initialContent: e.target.value }));
    setError("");
  };

  const validateAndNext = () => {
    onNext();
  };

  return (
    <div className="space-y-4 flex flex-1 flex-col">
      <div className="flex-1">
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
          className="resize-y text-xl w-full border p-4 rounded-lg outline-none"
        />
        {error && <p className="text-xl text-primary">{error}</p>}
      </div>
      <div className="flex justify-end">
        <Button
          type="button"
          className="bg-primary text-white hover:bg-primary/90 text-xl"
          disabled={isLoading}
          onClick={validateAndNext}
        >
          {isLoading ? "Generando..." : "Siguiente"}
        </Button>
      </div>
    </div>
  );
};
