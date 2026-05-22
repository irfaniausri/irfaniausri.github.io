export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
        padding: "15px 0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div style={{ fontWeight: 600 }}>
        Irfani Rahmi Ausri
      </div>

      <div
        style={{
          display: "flex",
          gap: "32px",
          color: "#777",
          fontSize: "15px",
        }}
      >
        {/* <a href="#projects">Publication Summaries</a>
        <a href="#research">Project Summary</a> */}
      </div>
    </nav>
  );
}