import type { ReactNode } from "react";
import { PageBanner } from "@/components/PageBanner";

export function InfoPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <main className="contact-page">
      <PageBanner title={title} lede={lede} />
      <section className="info-body">
        <div className="wrap info-copy">{children}</div>
      </section>
    </main>
  );
}
