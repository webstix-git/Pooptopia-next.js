import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - Pooptopia",
  description: "Pooptopia Terms of Service, revised 01/01/2026, including the privacy policy.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
