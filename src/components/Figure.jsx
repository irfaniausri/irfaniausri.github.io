import "../styles/Figure.css";

export default function Figure({
  src,
  caption,
  align = "center",
  width,
}) {
  return (
    <figure
      className={`figure figure-${align}`}
      style={{
        maxWidth: width || "760px",
      }}
    >
      <img src={src} alt={caption} />

      {caption && (
        <figcaption>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}