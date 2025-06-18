import FallbackPage from "@/pages/fallback";
import SearchPage, { SearchPageProps } from "@/pages/search";
import { Suspense } from "react";

export default function Page(props: SearchPageProps) {
  return (
    <Suspense fallback={<FallbackPage {...props} />}>
      <SearchPage {...props} />
    </Suspense>
  );
}
