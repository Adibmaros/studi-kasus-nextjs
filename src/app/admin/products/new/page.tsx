import ProductForm from "@/components/ProductForm";

export default function AdminNewProductPage() {
  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tambah Produk Baru</h1>
          <p className="page-subtitle">
            Data dikirim ke Route Handler POST /api/products (terproteksi
            session admin).
          </p>
        </div>
      </div>
      <ProductForm redirectTo="/admin" />
    </section>
  );
}
