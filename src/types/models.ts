import { JSONContent } from "@tiptap/react";

export interface AuthUser {
  id: number;
  email: string;
  collection: string;
  created_at: string;
  updated_at: string;
  [key: string]: unknown;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  post_count: number;
  translations?: CategoryTranslation[];
  updated_at: string;
  created_at: string;
}

export interface CategoryTranslation {
  id: number;
  category?: Category;
  locale: string;
  translated_name: string;
  translated_description: string;
  updated_at: string;
  created_at: string;
}
export interface User {
  id: number;
  name: string;
  email: string;
  isEmailVerified: boolean;
  photo?: CoverImage | null;
  created_at: string;
  updated_at: string;
}

export type Author = User & {
  position: string | null;
  bio: string | null;
  email: string;
  linkedIn: string | null;
  github: string | null;
  website: string | null;
};

export interface CoverImage {
  id: number;
  alt: string;
  updated_at: string;
  created_at: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: CoverImage | null;
  cover_thumbnail?: CoverImage | null;
  category?: Category;
  category_id?: number;
  author: Author;
  published: boolean;
  views: number;
  likes: number;
  published_date: string;
  translations?: PostTranslation[];
  meta: {
    title: string;
    description: string | null;
  };
  created_at: string;
  updated_at: string;
}

export interface PostTranslation {
  id: number;
  locale: string;
  slug: string;
  translated_title: string;
  translatedExcerpt: string;
  translated_content: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  value: JSONContent;
  created_at: string;
  updated_at: string;
  user?: User;
}
