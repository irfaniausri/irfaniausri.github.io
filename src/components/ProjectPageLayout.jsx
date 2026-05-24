export default function ProjectPageLayout({
  page,
  children,
}) {

  return (
    <main>
      <header
        style={{
          marginTop: "72px",
          marginBottom: "10px",
          maxWidth: "860px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            fontSize: "30px",
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: "20px",
            color: "#222",
          }}
        >
          {page.title}
        </h1>

        {/* METADATA */}
        <div
          className="project-metadata"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontSize: "18px",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          {/* YEAR */}
          <div>
            {page.year}
          </div>

          {/* PUBLICATION TYPE */}
          {page.journal && (
            <div>
              <strong style={{ color: "#555" }}>
                Journal:
              </strong>{" "}
              {page.journal}
            </div>
          )}

          {/* PROJECT TYPE */}
          {page.project_type && (
            <div>
              <strong style={{ color: "#555" }}>
                Type:
              </strong>{" "}
              {page.project_type}

              {page.status && (
                <>
                  {" · "}
                  {page.status}
                </>
              )}
            </div>
          )}

          {/* AUTHORS */}
          {page.authors && (
            <div
              style={{
                maxWidth: "760px",
              }}
            >
              <strong style={{ color: "#555" }}>
                Authors:
              </strong>{" "}
              {/* {page.authors} */}
              {page.authors
                .split("Irfani Rahmi Ausri")
                .reduce((prev, curr, index) => [
                  ...prev,
                  index > 0 && (
                    <strong key={index}>
                      Irfani Rahmi Ausri
                    </strong>
                  ),
                  curr,
                ], [])}
            </div>
          )}

          {/* ARTICLE LINK */}
          {page.article_link && (
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <a
                href={page.article_link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#444",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "#ccc",
                }}
              >
                Published Article
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="markdown-content">
        {children}
      </div>
    </main>
  );
}