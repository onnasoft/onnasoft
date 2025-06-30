export interface FormData {
  initialContent: string;
  title: string;
  excerpt: string;
  content: string;
  published: boolean;
  published_date: Date | undefined;
}

export const initialFormData: FormData = {
  initialContent: "",
  title: "",
  excerpt: "",
  content: "",
  published: true,
  published_date: new Date(),
};
