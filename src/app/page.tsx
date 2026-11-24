import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Katalog Produk</h1>
          <p className="page-subtitle">
            Halaman publik (read-only). Login sebagai admin untuk menambah,
            mengedit, atau menghapus produk.
          </p>
        </div>
      </div>
      <ProductList isAdmin={false} />
    </section>
  );
}
