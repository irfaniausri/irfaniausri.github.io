import ReactMarkdown from "react-markdown";
import ProjectPageLayout from "../components/ProjectPageLayout";
import markdown from "../content/work/nutritional_calculator.md?raw";

import { workPages } from "../data/work_pages";

export default function NutritionalCalculatorPage() {
  const page = workPages["nutritional_calculator"];

  return (
    <ProjectPageLayout
      title={page.title}
      metadata={page.metadata}
    >
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </ProjectPageLayout>
  );
}