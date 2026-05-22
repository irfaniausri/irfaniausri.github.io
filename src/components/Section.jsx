export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      style={{
        padding: "10px 0",
        borderTop: "1px solid #eaeaea",
      }}
    >
      <h2
        style={{
            fontSize: "28px",
            color: "#222",
            marginBottom: "10px",
            fontWeight: 600,
            letterSpacing: "-0.5px",
            lineHeight: 1.2,
        }}
        >
        {title}
      </h2>

      {children}
    </section>
  );
}