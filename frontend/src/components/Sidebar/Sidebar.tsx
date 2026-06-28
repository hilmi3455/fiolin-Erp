const menuGroups = [
  {
    title: "Ana Menü",
    items: [
      { label: "Dashboard", icon: "🏠" },
      { label: "Ürünler", icon: "📦" },
      { label: "Siparişler", icon: "🛒" },
      { label: "Ürün Bul", icon: "📍" },
    ],
  },
  {
    title: "Depo",
    items: [
      { label: "Mal Kabul", icon: "📥" },
      { label: "Depo Yönetimi", icon: "🏢" },
      { label: "Transfer İşlemleri", icon: "🔄" },
      { label: "Kargo / Sevkiyat", icon: "🚚" },
      { label: "Sayım", icon: "📋" },
    ],
  },
  {
    title: "Ticari",
    items: [
      { label: "Müşteriler / Cari", icon: "👥" },
      { label: "Bayiler", icon: "🤝" },
      { label: "Tedarikçiler", icon: "🏭" },
      { label: "Satışlar", icon: "💰" },
      { label: "Finans", icon: "💳" },
      { label: "Ödeme Yöntemleri", icon: "🏦" },
    ],
  },
  {
    title: "AI & Sistem",
    items: [
      { label: "Raporlar", icon: "📊" },
      { label: "Entegrasyonlar", icon: "🔗" },
      { label: "AI Görsel Stüdyosu", icon: "🎨" },
      { label: "AI Merkezi", icon: "🤖" },
      { label: "Kullanıcılar & Yetkiler", icon: "👤" },
      { label: "Ayarlar", icon: "⚙️" },
      { label: "Yardım", icon: "❓" },
    ],
  },
];

export function Sidebar() {
  return (
    <aside style={sidebar}>
      <div style={brand}>
        <div style={brandMark}>F</div>
        <div>
          <strong style={{ fontSize: 22 }}>FIOLIN ERP</strong>
          <p style={brandSub}>AI Powered ERP & WMS</p>
        </div>
      </div>

      <nav style={nav}>
        {menuGroups.map((group) => (
          <div key={group.title}>
            <p style={groupTitle}>{group.title}</p>

            <div style={{ display: "grid", gap: 6 }}>
              {group.items.map((item) => (
                <button
                  key={item.label}
                  style={{
                    ...menuButton,
                    ...(item.label === "Dashboard" ? activeButton : {}),
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div style={companyBox}>
        <div style={avatar}>F</div>

        <div>
          <strong>Fiolin Company</strong>
          <p style={muted}>Yönetici</p>
        </div>
      </div>

      <button style={logoutButton}>Çıkış Yap</button>
    </aside>
  );
}

const sidebar = {
  width: 285,
  minHeight: "100vh",
  background: "#ffffff",
  borderRight: "1px solid #e5e7eb",
  padding: 22,
  display: "flex",
  flexDirection: "column" as const,
};

const brand = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 24,
};

const brandMark = {
  width: 44,
  height: 44,
  borderRadius: 14,
  background: "#020617",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontSize: 30,
  fontFamily: "serif",
  fontStyle: "italic",
  fontWeight: 800,
};

const brandSub = {
  margin: "4px 0 0",
  color: "#64748b",
  fontSize: 12,
};

const nav = {
  display: "grid",
  gap: 18,
};

const groupTitle = {
  fontSize: 12,
  color: "#94a3b8",
  fontWeight: 800,
  textTransform: "uppercase" as const,
  letterSpacing: 0.6,
  margin: "0 0 8px",
};

const menuButton = {
  width: "100%",
  border: "none",
  background: "transparent",
  color: "#334155",
  padding: "11px 12px",
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontWeight: 700,
  cursor: "pointer",
  textAlign: "left" as const,
};

const activeButton = {
  background: "#eef4ff",
  color: "#2563eb",
};

const companyBox = {
  marginTop: "auto",
  borderTop: "1px solid #e5e7eb",
  paddingTop: 18,
  display: "flex",
  alignItems: "center",
  gap: 12,
};

const avatar = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  background: "#020617",
  color: "white",
  display: "grid",
  placeItems: "center",
  fontWeight: 800,
};

const muted = {
  margin: 0,
  color: "#64748b",
  fontSize: 13,
};

const logoutButton = {
  marginTop: 16,
  border: "none",
  background: "transparent",
  color: "#ef4444",
  fontWeight: 800,
  textAlign: "left" as const,
  cursor: "pointer",
};