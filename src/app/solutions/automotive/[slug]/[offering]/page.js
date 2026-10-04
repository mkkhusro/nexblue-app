import { notFound } from "next/navigation";
import OfferingDetailPage from "../../OfferingDetailPage";
import { automotiveSolutions, getAutomotiveOfferingSlug } from "../../data";

function findOffering(solutionSlug, offeringSlug) {
  const solution = automotiveSolutions.find((item) => item.slug === solutionSlug);
  if (!solution) return null;

  const areaIndex = solution.areas.findIndex((area) => getAutomotiveOfferingSlug(area.title) === offeringSlug);
  if (areaIndex < 0) return null;

  return {
    solution,
    area: solution.areas[areaIndex],
    areaImage: solution.areaImages[areaIndex],
  };
}

export function generateStaticParams() {
  return automotiveSolutions.flatMap((solution) =>
    solution.areas.map((area) => ({
      slug: solution.slug,
      offering: getAutomotiveOfferingSlug(area.title),
    })),
  );
}

export async function generateMetadata({ params }) {
  const { slug, offering } = await params;
  const result = findOffering(slug, offering);

  if (!result) {
    return { title: "Automotive Solutions | NEXBLUE" };
  }

  return {
    title: `${result.area.title} | ${result.solution.title} | NEXBLUE`,
    description: result.area.copy,
  };
}

export default async function Page({ params }) {
  const { slug, offering } = await params;
  const result = findOffering(slug, offering);

  if (!result) {
    notFound();
  }

  const relatedAreas = result.solution.areas
    .map((area, index) => ({ area, image: result.solution.areaImages[index] }))
    .filter(({ area }) => area.title !== result.area.title);

  return <OfferingDetailPage {...result} relatedAreas={relatedAreas} />;
}