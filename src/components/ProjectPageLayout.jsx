export default function ProjectPageLayout({
  title,
  metadata,
  heroImage,
  heroCaption,
  children,
}) {
  return (
    <main>
      <header
        style={{
          marginTop: "72px",
          marginBottom: "56px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            lineHeight: 1.2,
            fontWeight: 600,
            marginBottom: "18px",
            maxWidth: "820px",
          }}
        >
          {title}
        </h1>

        <div
          style={{
            fontSize: "14px",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          {metadata}
        </div>
      </header>

      {heroImage && (
        <figure
          style={{
            marginBottom: "56px",
          }}
        >
          <img
            src={heroImage}
            alt={heroCaption}
            style={{
              borderRadius: "10px",
              border: "1px solid #ececec",
            }}
          />

          {heroCaption && (
            <figcaption
              style={{
                marginTop: "12px",
                fontSize: "13px",
                color: "#777",
                lineHeight: 1.6,
              }}
            >
              {heroCaption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="markdown-content">
        {children}
      </div>
    </main>
  );
}