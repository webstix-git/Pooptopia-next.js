import type { Metadata } from "next";
import { AiPolicyPage } from "@/components/AiPolicyPage";

export const metadata: Metadata = {
  title: "AI Policy - Pooptopia",
  description:
    "Pooptopia visits and follow-up are done by our team. Photographs on this website are Pooptopia photographs.",
};

export default function Page() {
  return <AiPolicyPage />;
}
