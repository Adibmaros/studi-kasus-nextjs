"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("/api/products", { cache: "no-store" });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Gagal memuat produk");
      }

      setProducts(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function handleDelete(product: Product) {
    const confirmed = window.confirm(
      `Yakin ingin menghapus produk "${product.name}"?`
    );
    if (!confirmed) return;

    try {
      setDeletingId(product.id);
      const res = await fetch(`/api/products/${product.id}`, {
        method: "DELETE",
      });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Gagal menghapus produk");
      }

      setProducts((prev) => prev.filter((item) => item.id !== product.id));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus produk");
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) {
    return <div className="card empty-state">Memuat daftar produk...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-error">
        {error}{" "}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={fetchProducts}
          style={{ marginLeft: "0.75rem" }}
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="card empty-state">
        <p style={{ marginBottom: "1rem" }}>Belum ada produk di database.</p>
        <Link href="/products/new" className="btn btn-primary">
          + Tambah Produk Pertama
        </Link>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <div>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desc">
              {product.description || "Tidak ada deskripsi."}
            </p>
            <div className="product-meta">
              <span className="product-price">
                {formatRupiah(product.price)}
              </span>
              <span className="product-stock">Stok: {product.stock}</span>
            </div>
          </div>

          <div className="actions">
            <Link
              href={`/products/${product.id}/edit`}
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              style={{ flex: 1 }}
              disabled={deletingId === product.id}
              onClick={() => handleDelete(product)}
            >
              {deletingId === product.id ? "Menghapus..." : "Hapus"}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
