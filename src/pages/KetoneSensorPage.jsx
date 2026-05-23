import ReactMarkdown from "react-markdown";
import ProjectPageLayout from "../components/ProjectPageLayout";
import markdown from "../content/work/ketone_sensor.md?raw";

import { workPages } from "../data/work_pages";

export default function KetoneSensorPage() {
  const page = workPages["ketone_sensor"];

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