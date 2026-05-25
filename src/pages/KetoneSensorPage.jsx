import ReactMarkdown from "react-markdown";
import Figure from "../components/Figure";
import ProjectPageLayout from "../components/ProjectPageLayout";

import markdown from "../content/work/ketone_sensor.md?raw";

import { workPages } from "../data/work_pages";

export default function KetoneSensorPage() {
  const page = workPages["ketone_sensor"];
  const blocks = markdown.split(/(::figure[\s\S]*?::)/g);

  return (
    <ProjectPageLayout page={page}>
      {blocks.map((block, index) => {

        // DETECT FIGURE BLOCK
        if (block.trim().startsWith("::figure")) {

          const srcMatch = block.match(/src:\s*(.*)/);
          const captionMatch = block.match(/caption:\s*(.*)/);
          const alignMatch = block.match(/align:\s*(.*)/);

          const src = srcMatch?.[1]?.trim();
          const caption = captionMatch?.[1]?.trim();
          const align = alignMatch?.[1]?.trim();

          const widthMatch = block.match(/width:\s*(.*)/);
          const width = widthMatch?.[1]?.trim();  

          return (
            <Figure
              key={index}
              src={`/images/ketone_paper/${src}`}
              caption={caption}
              align={align}
              width={width}
            />
          );
        }

        // NORMAL MARKDOWN
        return (
          <ReactMarkdown key={index}>
            {block}
          </ReactMarkdown>
        );
      })}
    </ProjectPageLayout>
  );
}