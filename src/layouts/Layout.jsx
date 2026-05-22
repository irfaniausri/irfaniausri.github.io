export default function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: "980px",
        margin: "0 auto",
        padding: "0 32px",
      }}
    >
      {children}
    </div>
  );
}