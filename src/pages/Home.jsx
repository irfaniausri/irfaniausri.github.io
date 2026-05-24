import ReactMarkdown from "react-markdown";

import Section from "../components/Section";
import WorkCard from "../components/WorkCard";

import landingContent from "../content/landing_page.md?raw";
import headshot from "../assets/images/landing_page/IrfaniA.jpg";
import { work } from "../data/work";

export default function Home() {
  return (
    <main>
      <Section id="about">
        <div className="about-grid">

            {/* MAIN CONTENT */}
            <div>
            <div
                style={{
                marginTop: "40px",
                maxWidth: "760px",
                }}
            >
                {/* INTRO STATEMENTS */}
                <p
                style={{
                    fontSize: "20px",
                    lineHeight: 1.6,
                    color: "#444",
                    fontWeight: 500,
                    marginBottom: "36px",
                }}
                >
                Working on systems for personal health.
                <br />
                From wearable biosensors to health data systems.
                </p>

                {/* LONG-FORM CONTENT */}
                <div
                style={{
                    color: "#555",
                    lineHeight: 1.8,
                    fontSize: "15px",
                }}
                >
                <ReactMarkdown
                    components={{
                    a: ({ node, ...props }) => (
                        <a
                        {...props}
                        style={{
                            color: "#222",
                            textDecoration: "underline",
                            textUnderlineOffset: "3px",
                            textDecorationColor: "#bbb",
                        }}
                        target="_blank"
                        rel="noreferrer"
                        />
                    ),
                    }}
                >
                    {landingContent}
                </ReactMarkdown>
                </div>
            </div>
            </div>

            {/* SIDEBAR */}
            <div>
            <img
                src={headshot}
                alt="Irfani Ausri"
                style={{
                width: "160px",
                borderRadius: "8px",
                objectFit: "cover",
                border: "1px solid #efefef",
                marginBottom: "14px",
                }}
            />

            <div
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "14px",
                }}
            >
                <a
                href="https://scholar.google.com/citations?user=0Wt6kw4AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                style={{
                    color: "#444",
                    textDecoration: "none",
                }}
                >
                Google Scholar
                </a>

                <a
                href="https://www.linkedin.com/in/irfani-ausri-a2293a210/"
                target="_blank"
                rel="noreferrer"
                style={{
                    color: "#444",
                    textDecoration: "none",
                }}
                >
                LinkedIn
                </a>
            </div>
            </div>

        </div>
        </Section>
    

      <Section id="work" title="Selected Publications and Projects">
        <p
            style={{
                fontSize: "15px",
                color: "#666",
                marginBottom: "10x",
                lineHeight: 1.7,
            }}
            >
            See my{" "}
            <a
                href="https://scholar.google.com/citations?user=0Wt6kw4AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                style={{
                color: "#222",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                textDecorationColor: "#bbb",
                }}
            >
                Google Scholar
            </a>{" "}
            for the complete publication list.
        </p>
        {work.map((item, index) => (
            <WorkCard
            key={index}
            year={item.year}
            slug={item.slug}
            thumbnail={item.thumbnail}
            title={item.title}
            journal={item.journal}
            authors={item.authors}
            summary={item.summary}
            project_type={item.project_type}
            status={item.status}
            article_link={item.article_link}
            summary_link={item.summary_link}
            />
        ))}
    </Section>
    </main>
  );
}