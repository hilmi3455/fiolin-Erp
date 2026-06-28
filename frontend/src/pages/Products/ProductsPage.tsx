import { useState } from "react";

type Product = {
  modelCode: string;
  name: string;
  category: string;
  colors: string;
  sizes: string;
  purchasePrice: number;
  salePrice: number;
};

export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState<Product>({
    modelCode: "",
    name: "",
    category: "",
    colors: "",
    sizes: "",
    purchasePrice: 0,
    salePrice: 0,
  });

  function createProduct() {
    if (!form.modelCode || !form.name) return;
    setProducts([...products, form]);
    setForm({
      modelCode: "",
      name: "",
      category: "",
      colors: "",
      sizes: "",
      purchasePrice: 0,
      salePrice: 0,
    });
  }

  function createBarcode(modelCode: string, color: string, size: string) {
    return `FLN-${modelCode}-${color}-${size}`
      .toUpperCase()
      .replaceAll(" ", "");
  }

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Ürünler</h1>
      <p style={{ color: "#64748b" }}>
        Ürün ekle, renk/beden varyantlarını oluştur ve otomatik barkod üret.
      </p>

      <div style={panel}>
        <h2>+ Ürün Ekle</h2>

        <div style={formGrid}>
          <input style={input} placeholder="Model Kodu Örn: 2541" value={form.modelCode} onChange={(e) => setForm({ ...form, modelCode: e.target.value })} />
          <input style={input} placeholder="Ürün Adı" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input style={input} placeholder="Kategori Örn: Üst Giyim / Bluz" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
          <input style={input} placeholder="Renkler Örn: Siyah, Bej, Füme" value={form.colors} onChange={(e) => setForm({ ...form, colors: e.target.value })} />
          <input style={input} placeholder="Bedenler Örn: S, M, L, XL" value={form.sizes} onChange={(e) => setForm({ ...form, sizes: e.target.value })} />
          <input style={input} type="number" placeholder="Alış Fiyatı" value={form.purchasePrice || ""} onChange={(e) => setForm({ ...form, purchasePrice: Number(e.target.value) })} />
          <input style={input} type="number" placeholder="Satış Fiyatı" value={form.salePrice || ""} onChange={(e) => setForm({ ...form, salePrice: Number(e.target.value) })} />
        </div>

        <button style={button} onClick={createProduct}>
          Ürünü Kaydet ve Varyantları Oluştur
        </button>
      </div>

      <div style={panel}>
        <h2>Ürün Listesi</h2>

        {products.length === 0 ? (
          <p style={{ color: "#64748b" }}>Henüz ürün eklenmedi.</p>
        ) : (
          products.map((product) => {
            const colors = product.colors.split(",").map((x) => x.trim()).filter(Boolean);
            const sizes = product.sizes.split(",").map((x) => x.trim()).filter(Boolean);

            return (
              <div key={product.modelCode} style={productCard}>
                <h3>{product.name}</h3>
                <p><strong>Model:</strong> {product.modelCode}</p>
                <p><strong>Kategori:</strong> {product.category}</p>
                <p><strong>Alış:</strong> ₺{product.purchasePrice} / <strong>Satış:</strong> ₺{product.salePrice}</p>

                <h4>Otomatik Varyant & Barkodlar</h4>

                <div style={variantGrid}>
                  {colors.map((color) =>
                    sizes.map((size) => (
                      <div style={variantCard} key={`${color}-${size}`}>
                        <strong>{color} / {size}</strong>
                        <code>{createBarcode(product.modelCode, color, size)}</code>
                        <button style={smallButton}>Barkod Yazdır</button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

const panel = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 24,
  marginBottom: 24,
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 14,
};

const input = {
  padding: 13,
  borderRadius: 12,
  border: "1px solid #cbd5e1",
};

const button = {
  marginTop: 18,
  padding: "13px 18px",
  borderRadius: 12,
  border: "none",
  background: "#2563eb",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};

const productCard = {
  border: "1px solid #e5e7eb",
  borderRadius: 16,
  padding: 18,
  marginBottom: 16,
};

const variantGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
  gap: 12,
};

const variantCard = {
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: 14,
  display: "grid",
  gap: 8,
};

const smallButton = {
  padding: 9,
  borderRadius: 10,
  border: "none",
  background: "#0f172a",
  color: "white",
  cursor: "pointer",
};