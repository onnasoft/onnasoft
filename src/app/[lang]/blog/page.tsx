import BlogPage, { BlogPageProps } from "@/pages/blog";
import FallbackPage from "@/pages/fallback";
import { Suspense } from "react";

export default function Page(props: BlogPageProps) {
  return (
    <Suspense fallback={<FallbackPage {...props} />}>
      <BlogPage {...props} />
    </Suspense>
  );
}
