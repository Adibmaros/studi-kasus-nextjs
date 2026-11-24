# Tantangan 4: File Upload ke Supabase Storage & Modifikasi Schema Prisma

Di tantangan ini, kamu akan menambahkan fitur **upload gambar produk** yang disimpan ke **Supabase Storage**, sekaligus memodifikasi schema database Prisma.

## Tujuan Pembelajaran
- Menambahkan kolom baru pada `prisma/schema.prisma` dan melakukan sinkronisasi ke Supabase PostgreSQL.
- Menggunakan `@supabase/supabase-js` di dalam Next.js **Route Handler** untuk mengupload file ke Supabase Storage.
- Menangani `multipart/form-data` (`request.formData()`) di Route Handler.
- Menampilkan gambar dari domain eksternal (Supabase) menggunakan `next/image`.

## Kriteria Selesai (Acceptance Criteria)
- [ ] Membuat **Storage Bucket** bernama `product-images` (dengan akses **Public**) di Dashboard Supabase.
- [ ] Menginstall `@supabase/supabase-js` dan menambahkan env di `.env` & `.env.example`:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `SUPABASE_SERVICE_ROLE_KEY` (hanya dipakai di server/Route Handler — **jangan** pakai prefix `NEXT_PUBLIC_`)
- [ ] **Modifikasi Schema Prisma (`prisma/schema.prisma`):**
  - Tambahkan field `imageUrl String?` pada model `Product`.
  - Jalankan `npx prisma db push` (atau `npx prisma migrate dev`) dan `npx prisma generate`.
- [ ] **Backend (Route Handler):**
  - Buat endpoint `POST /api/upload` (diproteksi auth admin!) yang menerima file gambar lewat `FormData`, memvalidasi tipe file (`image/jpeg`, `image/png`, `image/webp`) dan ukuran maksimal (misal 2MB), mengupload ke bucket `product-images`, lalu mengembalikan `{ url: publicUrl }`.
  - Update `POST /api/products` dan `PUT /api/products/[id]` agar menyimpan field `imageUrl`.
- [ ] **Frontend:**
  - Tambah input file gambar + preview gambar pada form Create & Edit Product di `/admin`.
  - Tampilkan gambar produk di halaman publik (`/`) dan tabel admin (`/admin`), dengan placeholder jika produk belum memiliki gambar.
- [ ] Konfigurasi `images.remotePatterns` di `next.config.ts` jika menggunakan komponen `<Image />` dari `next/image`.
- [ ] `npm run build` berjalan sukses tanpa error.

## Petunjuk (Hints)
1. Buat helper client Supabase khusus server di `src/lib/supabase-admin.ts`:
   ```ts
   import { createClient } from "@supabase/supabase-js";

   export const supabaseAdmin = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.SUPABASE_SERVICE_ROLE_KEY!
   );
   ```
2. Di `POST /api/upload`, konversi `File` ke `ArrayBuffer` / `Buffer` sebelum diupload ke `supabaseAdmin.storage.from("product-images").upload(...)`.
3. Gunakan nama file unik (misal `${Date.now()}-${file.name}`) agar file dengan nama sama tidak saling menimpa.
4. *(Nilai Plus)*: Saat produk dihapus (`DELETE /api/products/[id]`) atau gambarnya diganti, hapus juga file gambar lama dari Supabase Storage!
