import FallbackPage from "@/pages/fallback";
import PostPage, { PostPageProps } from "@/pages/post";
import { Suspense } from "react";

export default function Page(props: PostPageProps) {
  return (
    <Suspense fallback={<FallbackPage {...props} />}>
      <PostPage {...props} />
    </Suspense>
  );
}
