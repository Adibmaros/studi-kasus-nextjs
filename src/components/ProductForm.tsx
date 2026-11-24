"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Product } from "@/types/product";

interface ProductFormProps {
  initialData?: Product;
  redirectTo?: string;
}

export default function ProductForm({
  initialData,
  redirectTo = "/",
}: ProductFormProps) {
  const router = useRouter();
  const isEdit = Boolean(initialData);

  const [name, setName] = useState(initialData?.name ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [price, setPrice] = useState(
    initialData ? String(initialData.price) : ""
  );
  const [stock, setStock] = useState(
    initialData ? String(initialData.stock) : "0"
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    try {
      setSubmitting(true);
      const endpoint = isEdit
        ? `/api/products/${initialData!.id}`
        : "/api/products";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price: Number(price),
          stock: Number(stock),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Gagal menyimpan produk");
      }

      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      {error && <div className="alert alert-error">{error}</div>}

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nama Produk *
        </label>
        <input
          id="name"
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: Keyboard Mechanical"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Deskripsi
        </label>
        <textarea
          id="description"
          rows={3}
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Deskripsi singkat produk..."
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Harga (Rp) *
          </label>
          <input
            id="price"
            type="number"
            min={0}
            step={1}
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="150000"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock" className="form-label">
            Stok *
          </label>
          <input
            id="stock"
            type="number"
            min={0}
            step={1}
            className="form-input"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting
            ? "Menyimpan..."
            : isEdit
              ? "Simpan Perubahan"
              : "Tambah Produk"}
        </button>
        <Link href={redirectTo} className="btn btn-secondary">
          Batal
        </Link>
      </div>
    </form>
  );
}
