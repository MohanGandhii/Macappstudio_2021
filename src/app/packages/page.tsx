import { Metadata } from "next";
import ResourcesClient from "./_components/ResourcesClient";

export const metadata: Metadata = {
  title: "Packages",
  description: "Explore our resources, product frameworks, hiring strategies, and growth paths to scale your product.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
