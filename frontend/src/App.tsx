import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) return <Dashboard />;

  return (
    <div style={page}>
      <div style={card}>
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <div style={logo}>FIOLIN</div>
          <div style={subtitle}>AI Powered ERP & WMS Platform</div>
        </div>

        <label>E-posta</label>
        <input style={inputStyle} placeholder="admin@fiolin.com" />

        <label>Şifre</label>
        <input style={inputStyle} type="password" placeholder="••••••••" />

        <button style={button} onClick={() => setLoggedIn(true)}>
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={dashboard}>
      <aside style={sidebar}>
        <h2>FIOLIN ERP</h2>
        <p>Dashboard</p>
        <p>Ürünler</p>
        <p>Stok</p>
        <p>Raflar</p>
        <p>Satış</p>
        <p>AI Öneriler</p>
      </aside>

      <main style={main}>
        <h1>Yönetim Paneli</h1>

        <div style={grid}>
          <Box title="Günlük Satış" value="₺0" />
          <Box title="Toplam Stok" value="0 Adet" />
          <Box title="Kritik Stok" value="0 Ürün" />
          <Box title="AI Önerisi" value="Hazır" />
        </div>
      </main>
    </div>
  );
}

function Box({ title, value }: { title: string; value: string }) {
  return (
    <div style={box}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

const page = { minHeight: "100vh", background: "#020617", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Arial" };
const card = { width: 420, padding: 42, borderRadius: 28, background: "#0f172a" };
const logo = { fontSize: 42, fontWeight: 800 };
const subtitle = { color: "#38bdf8" };
const inputStyle = { width: "100%", padding: 14, margin: "8px 0 18px", borderRadius: 14 };
const button = { width: "100%", padding: 15, borderRadius: 14, background: "#2563eb", color: "white", border: "none" };

const dashboard = { minHeight: "100vh", display: "flex", background: "#020617", color: "white", fontFamily: "Arial" };
const sidebar = { width: 240, padding: 30, background: "#0f172a" };
const main = { flex: 1, padding: 40 };
const grid = { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 };
const box = { background: "#0f172a", padding: 24, borderRadius: 20 };

export default App;
