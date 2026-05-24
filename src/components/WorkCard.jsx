import { Link } from "react-router-dom";

export default function WorkCard({
  year,
  slug,
  thumbnail,
  title,
  journal,
  authors,
  summary,
  project_type,
  status,
  article_link,
  summary_link,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1px 1fr",
        gap: "28px",
        marginBottom: "10px",
      }}
    >
      {/* YEAR */}
      <div
        style={{
          fontSize: "18px",
          color: "#888",
          paddingTop: "2px",
        }}
      >
        {year}
      </div>

      {/* TIMELINE */}
      <div
        style={{
          width: "1px",
          background: "#e8e8e8",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: thumbnail ? "1fr 240px" : "1fr",
          gap: "28px",
          alignItems: "start",
        }}
      >
        {/* TEXT */}
        <div>
          {/* TITLE */}
          <h2
            style={{
              fontSize: "20px",
              lineHeight: 1.25,
              marginBottom: "18px",
              fontWeight: 600,
              maxWidth: "760px",
            }}
          >
            {title}
          </h2>

          <div
            style={{
              display: "flex",
              gap: "18px",
              marginBottom: "18px",
              flexWrap: "wrap",
            }}
          >
            {article_link && (
              <a
                href={article_link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "14px",
                  color: "#444",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "#ccc",
                }}
              >
                Published Article
              </a>
            )}

            {summary_link && (
              <Link
                to={summary_link}
                style={{
                  fontSize: "14px",
                  color: "#444",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "#ccc",
                }}
              >
                Summary
              </Link>
            )}
          </div>

          {/* METADATA */}
          {(journal || project_type) && (
            <p
              style={{
                fontSize: "15px",
                color: "#777",
                marginBottom: "8px",
              }}
            >
              <strong>
                {journal || project_type}
              </strong>

              {status && ` · ${status}`}
            </p>
          )}

          {/* AUTHORS */}
          {authors && (
            <p
              style={{
                fontSize: "15px",
                color: "#888",
                marginBottom: "18px",
                maxWidth: "700px",
              }}
            >
              {authors
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
            </p>
          )}

          {/* SUMMARY */}
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: 1.75,
              maxWidth: "720px",
            }}
          >
            {summary}
          </p>
        </div>

        {/* THUMBNAIL */}
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            style={{
              width: "240px",
              borderRadius: "6px",
              border: "1px solid #efefef",
            }}
          />
        )}
      </div>
    </div>
  );
}