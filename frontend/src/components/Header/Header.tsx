export function Header() {
  return (
    <header style={header}>
      <div>
        <h2 style={title}>Dashboard</h2>
        <p style={subtitle}>Fiolin ERP yönetim paneli</p>
      </div>

      <div style={actions}>
        <input style={search} placeholder="Ürün, sipariş, barkod ara..." />

        <button style={iconButton}>🔔</button>

        <button style={primaryButton}>+ Yeni İşlem</button>

        <div style={userBox}>
          <div style={avatar}>Y</div>
          <div>
            <strong>Yahya Demir</strong>
            <p style={role}>Yönetici</p>
          </div>
        </div>
      </div>
    </header>
  );
}

const header = {
  height: 78,
  background: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
  padding: "0 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const title = {
  margin: 0,
  fontSize: 22,
};

const subtitle = {
  margin: "4px 0 0",
  color: "#64748b",
  fontSize: 14,
};

const actions = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const search = {
  width: 320,
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d1d5db",
};

const iconButton = {
  width: 42,
  height: 42,
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  background: "#ffffff",
  cursor: "pointer",
};

const primaryButton = {
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};

const userBox = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  borderLeft: "1px solid #e5e7eb",
  paddingLeft: 14,
};

const avatar = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  background: "#2563eb",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontWeight: 800,
};

const role = {
  margin: 0,
  color: "#64748b",
  fontSize: 13,
};