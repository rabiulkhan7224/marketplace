import { CTA } from "@/components/home/CTA";
import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { WorkflowExplanation } from "@/components/home/WorkflowExplanation";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WorkflowExplanation />
      <CTA />
    </>
  );
}
