import { StatCard } from "../../components/StatCard/StatCard";

export function DashboardPage() {
  return (
    <>
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: 30,
        }}
      >
        Hoş geldiniz. Fiolin ERP yönetim paneli.
      </p>

      <div style={grid}>
        <StatCard
          title="Bugünkü Satış"
          value="₺18.450"
          color="#16a34a"
        />

        <StatCard
          title="Toplam Stok"
          value="12.584"
          color="#2563eb"
        />

        <StatCard
          title="Stok Değeri"
          value="₺3.840.000"
          color="#ea580c"
        />

        <StatCard
          title="Bekleyen Sipariş"
          value="186"
          color="#dc2626"
        />
      </div>

      <div style={sectionGrid}>
        <div style={panel}>
          <h2>Bugünkü İşler</h2>

          <p>📦 18 sipariş hazırlanacak</p>
          <p>📥 6 mal kabul bekliyor</p>
          <p>⚠️ 12 ürün kritik stokta</p>
          <p>🎨 24 ürünün AI görseli eksik</p>
        </div>

        <div style={panel}>
          <h2>AI Önerileri</h2>

          <p>🤖 Peron 2 doluluk oranı yükseldi.</p>
          <p>🤖 Siyah Elbise M beden sipariş önerilir.</p>
          <p>🤖 7 ürünün Trendyol görseli eksik.</p>
        </div>
      </div>
    </>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: 20,
};

const sectionGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
  marginTop: 25,
};

const panel = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 24,
};