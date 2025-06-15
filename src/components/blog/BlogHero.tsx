type BlogHeroProps = Readonly<{
  title: string;
  description: string;
}>;

export default function BlogHero({ title, description }: BlogHeroProps) {
  return (
    <section className="hero-pattern pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
