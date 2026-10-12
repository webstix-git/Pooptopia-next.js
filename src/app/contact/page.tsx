import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact - Pooptopia",
  description:
    "Contact Pooptopia in Kenosha, Wisconsin. Call (262) 351-2147, email admin@pooptopia.dog, or send a note about your yard.",
};

export default function Page() {
  return <ContactPage />;
}
