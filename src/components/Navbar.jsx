import { Link } from "react-router-dom";

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
      {/* NAME */}
      <Link
        to="/"
        style={{
          fontWeight: 600,
          color: "#222",
          textDecoration: "none",
        }}
      >
        Irfani Rahmi Ausri
      </Link>

      {/* NAV LINKS */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          color: "#777",
          fontSize: "15px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "#777",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </div>
    </nav>
  );
}