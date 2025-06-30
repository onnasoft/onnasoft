export interface FormData {
  initialContent: string;
  title: string;
  excerpt: string;
  content: string;
  imagePrompt: string;
  published: boolean;
  published_date: Date | undefined;
}

export const initialFormData: FormData = {
  initialContent: "",
  title: "",
  excerpt: "",
  content: "",
  imagePrompt: "",
  published: true,
  published_date: new Date(),
};
