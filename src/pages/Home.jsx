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
            {/* LEFT */}
            <div>
            <div
                style={{
                marginTop: "40px",
                marginBottom: "42px",
                maxWidth: "620px",
                }}
            >
                <p
                style={{
                    fontSize: "20px",
                    lineHeight: 1.6,
                    color: "#444",
                    marginBottom: "10px",
                    fontWeight: 500,
                }}
                >
                Working on systems for personal health.
                <br />
                From wearable biosensors to health data systems.
                </p>

                {/* <p
                style={{
                    fontSize: "15px",
                    lineHeight: 1.8,
                    color: "#555",
                }}
                >
                Previously worked on wearable biosensors and microneedle sensors.
                <br />
                Currently building data systems for personal health.
                </p> */}
            </div>
            </div>

            {/* RIGHT */}
            <div>
            <img
                src={headshot}
                alt="Irfani Ausri"
                style={{
                width: "160px",
                borderRadius: "8px",
                objectFit: "cover",
                border: "1px solid #efefef",
                marginBottom: "10px",
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

                {/* <a
                href="https://github.com/irfaniausri"
                target="_blank"
                rel="noreferrer"
                style={{
                    color: "#444",
                    textDecoration: "none",
                }}
                >
                GitHub
                </a> */}
            </div>
            </div>
        </div>

        {/* FULL WIDTH CONTENT */}
        <div
            style={{
            maxWidth: "760px",
            color: "#555",
            lineHeight: 1.7,
            fontSize: "15px",
            marginTop: "20px",
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
                    transition: "0.2s ease",
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
            article_link={item.summary_link}
            />
        ))}
    </Section>
    </main>
  );
}