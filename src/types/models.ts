export interface AuthUser {
  id: number;
  email: string;
  collection: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: unknown;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  postCount: number;
  updatedAt: string;
  createdAt: string;
}

export interface CategoryTranslation {
  id: number;
  category: Category;
  locale: string;
  translatedName: string;
  translatedDescription: string;
  updatedAt: string;
  createdAt: string;
}

export interface Author {
  id: number;
  name: string;
  position: string | null;
  bio: string | null;
  photo: CoverImage | null;
  email: string;
  linkedIn: string | null;
  github: string | null;
  website: string | null;
  createdAt: string;
  updatedAt: string;
  loginAttempts: number;
}

export interface CoverImage {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string | null;
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
  coverImage: CoverImage | null;
  coverThumbnail: CoverImage | null;
  category: Category;
  author: Author;
  published: boolean;
  featured: boolean;
  publishedDate: string;
  meta: {
    title: string;
    description: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PostTranslation {
  id: number;
  post: Post;
  locale: string;
  slug: string;
  translatedTitle: string;
  translatedExcerpt: string;
  translatedContent: string;
  category: string;
  translatedMeta: {
    title: string;
    description: string;
  };
  createdAt: string;
  updatedAt: string;
}
