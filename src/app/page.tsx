import ProductList from "@/components/ProductList";

export default function HomePage() {
  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Katalog Produk</h1>
          <p className="page-subtitle">
            Level 1: CRUD dasar menggunakan Next.js Route Handlers + Prisma 5 +
            MySQL Lokal.
          </p>
        </div>
      </div>
      <ProductList />
    </section>
  );
}
