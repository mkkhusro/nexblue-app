import { notFound } from "next/navigation";
import AutomotiveSolutionPage from "../AutomotiveSolutionPage";
import { automotiveSolutions } from "../data";

export function generateStaticParams() {
  return automotiveSolutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = automotiveSolutions.find((item) => item.slug === slug);

  if (!solution) {
    return { title: "Automotive Solutions | NEXBLUE" };
  }

  return {
    title: `${solution.title} | Automotive Solutions | NEXBLUE`,
    description: solution.introduction,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const solution = automotiveSolutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return <AutomotiveSolutionPage solution={solution} />;
}