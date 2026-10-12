import type { Metadata } from "next";
import { OurWhyPage } from "@/components/OurWhyPage";

export const metadata: Metadata = {
  title: "Our Why - Pooptopia",
  description:
    "Pooptopia began after the family lost Tico in 2021. The work continues with Olive and Louie.",
};

export default function Page() {
  return <OurWhyPage />;
}
