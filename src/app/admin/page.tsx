import Link from "next/link";
import ProductList from "@/components/ProductList";

export default function AdminDashboardPage() {
  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard Admin</h1>
          <p className="page-subtitle">
            Halaman ini diproteksi oleh Auth.js Middleware. Kelola seluruh data
            produk di sini.
          </p>
        </div>
        <Link href="/admin/products/new" className="btn btn-primary">
          + Tambah Produk
        </Link>
      </div>
      <ProductList isAdmin={true} />
    </section>
  );
}
