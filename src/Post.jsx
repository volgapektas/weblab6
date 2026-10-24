export default function Post({ title, body }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "8px 0",
        padding: "12px",
        borderRadius: "6px",
      }}
    >
      <h3 style={{ textTransform: "capitalize", margin: "0 0 8px 0" }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: "#555" }}>{body}</p>
    </div>
  );
}
