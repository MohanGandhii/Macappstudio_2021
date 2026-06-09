import { Metadata } from "next";
import HowWeDoItClient from "./_components/HowWeDoItClient";

export const metadata: Metadata = {
  title: "How We Do It",
  description: "Explore our agile and flexible process, from project kickoff, PRD sign-off, iterative releases, to going live.",
};

export default function HowWeDoItPage() {
  return <HowWeDoItClient />;
}
