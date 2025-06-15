"use server";

type NoHydrationDivProps = {
  html: string;
  className?: string;
  id?: string;
};

const NoHydrationDiv = ({ html, className, id }: NoHydrationDivProps) => {
  return (
    <div
      id={id}
      className={className}
      data-no-hydration
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default NoHydrationDiv;
