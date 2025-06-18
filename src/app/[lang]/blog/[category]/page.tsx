import CategoryPage, { CategoryProps } from "@/pages/category";
import FallbackPage from "@/pages/fallback";
import { Suspense } from "react";

export default function Page(props: CategoryProps) {
  return (
     <Suspense fallback={<FallbackPage {...props} />}>
      <CategoryPage {...props} />
    </Suspense>
  );
}
