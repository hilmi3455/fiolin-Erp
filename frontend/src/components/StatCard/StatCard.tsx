type Props = {
  title: string;
  value: string;
  color?: string;
};

export function StatCard({
  title,
  value,
  color = "#2563eb",
}: Props) {
  return (
    <div style={card}>
      <div
        style={{
          width: 8,
          borderRadius: 20,
          background: color,
        }}
      />

      <div style={{ flex: 1 }}>
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: 14,
          }}
        >
          {title}
        </p>

        <h2
          style={{
            margin: "10px 0 0",
          }}
        >
          {value}
        </h2>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  borderRadius: 18,
  padding: 22,
  display: "flex",
  gap: 16,
  alignItems: "center",
  border: "1px solid #e5e7eb",
  boxShadow: "0 2px 10px rgba(0,0,0,.04)",
};