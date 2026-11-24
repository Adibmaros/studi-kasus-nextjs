import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand">
          Katalog Produk
        </Link>
        <nav className="navbar-links">
          <Link href="/" className="btn btn-secondary">
            Daftar Produk
          </Link>
          <Link href="/products/new" className="btn btn-primary">
            + Tambah Produk
          </Link>
        </nav>
      </div>
    </header>
  );
}
