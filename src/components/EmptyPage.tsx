import { PageBanner } from "@/components/PageBanner";

export function EmptyPage({
  title,
  lede,
  image,
}: {
  title: string;
  lede: string;
  image?: string;
}) {
  return (
    <main className="contact-page">
      <PageBanner title={title} lede={lede} image={image} />
    </main>
  );
}
