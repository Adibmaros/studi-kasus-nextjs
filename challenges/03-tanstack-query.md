# Tantangan 3: Data Fetching & Caching dengan TanStack Query

Di kode dasar, pengambilan data produk menggunakan `useEffect` + `fetch()` manual dan pengelolaan state `loading` / `error` secara manual. Di tantangan ini, refactor seluruh data fetching menggunakan **TanStack Query (React Query)**.

## Tujuan Pembelajaran
- Memahami perbedaan *client state* vs *server state*.
- Menggunakan `useQuery` untuk membaca data beserta fitur caching & automatic refetching.
- Menggunakan `useMutation` + `queryClient.invalidateQueries()` untuk operasi Create, Update, dan Delete tanpa reload halaman manual.

## Kriteria Selesai (Acceptance Criteria)
- [ ] `@tanstack/react-query` terinstall (opsional: tambah `@tanstack/react-query-devtools` untuk debugging).
- [ ] Membuat `QueryProvider` client component (`src/components/QueryProvider.tsx`) dan membungkus aplikasi di `src/app/layout.tsx`.
- [ ] Membuat custom hooks terpisah (misal di `src/hooks/useProducts.ts`) yang membungkus:
  - `useProducts()` (`useQuery` ke `GET /api/products`)
  - `useProduct(id)` (`useQuery` ke `GET /api/products/[id]`)
  - `useCreateProduct()` (`useMutation` ke `POST /api/products`)
  - `useUpdateProduct()` (`useMutation` ke `PUT /api/products/[id]`)
  - `useDeleteProduct()` (`useMutation` ke `DELETE /api/products/[id]`)
- [ ] Setiap mutasi sukses otomatis memanggil `queryClient.invalidateQueries({ queryKey: ["products"] })`.
- [ ] Menampilkan state loading (skeleton/spinner) dan error state dengan rapi dari TanStack Query.
- [ ] `npm run build` berjalan sukses tanpa error.

## Petunjuk (Hints)
1. Install package:
   ```bash
   npm install @tanstack/react-query
   ```
2. Pastikan instance `new QueryClient()` dibuat di dalam `useState(() => new QueryClient())` pada `QueryProvider.tsx` agar tidak di-reset setiap re-render di Next.js App Router.
3. Semua request tetap memanggil **Route Handlers** (`/api/products`), bukan langsung ke Prisma.
