"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductForm from "@/components/ProductForm";
import type { Product } from "@/types/product";

export default function EditProductPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const res = await fetch(`/api/products/${params.id}`, {
          cache: "no-store",
        });
        const json = await res.json();

        if (!res.ok) {
          throw new Error(json.error || "Produk tidak ditemukan");
        }

        setProduct(json.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadProduct();
    }
  }, [params.id]);

  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Edit Produk</h1>
          <p className="page-subtitle">
            Data akan diperbarui melalui Route Handler PUT /api/products/[id].
          </p>
        </div>
      </div>

      {loading && <div className="card empty-state">Memuat data produk...</div>}
      {error && <div className="alert alert-error">{error}</div>}
      {!loading && !error && product && <ProductForm initialData={product} />}
    </section>
  );
}
