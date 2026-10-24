export default function FilterForm({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Filter posts by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
      />
    </div>
  );
}
