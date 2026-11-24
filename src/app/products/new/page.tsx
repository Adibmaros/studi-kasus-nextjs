import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <section>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tambah Produk Baru</h1>
          <p className="page-subtitle">
            Data akan dikirim ke Route Handler POST /api/products.
          </p>
        </div>
      </div>
      <ProductForm />
    </section>
  );
}
