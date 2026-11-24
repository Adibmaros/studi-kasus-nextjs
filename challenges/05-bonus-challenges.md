# Tantangan 5 (Bonus): Fitur Produksi Lanjutan

Jika kamu sudah menyelesaikan Tantangan 1 sampai 4, tantangan bonus berikut akan membuat aplikasimu semakin mendekati standar aplikasi production.

## Pilihan Tantangan Bonus

### A. Validasi Schema dengan Zod
- Install `zod`.
- Buat schema validasi di `src/lib/validations/product.ts` dan `src/lib/validations/auth.ts`.
- Gunakan schema yang sama di **Route Handler** (validasi server) dan di **Form Frontend** (bisa dikombinasikan dengan `react-hook-form`).

### B. Search, Filter & Pagination di Route Handler
- Modifikasi `GET /api/products` agar mendukung query parameter:
  - `?search=keyword` (pencarian case-insensitive berdasarkan nama/deskripsi produk)
  - `?page=1&limit=6` (pagination menggunakan `skip` dan `take` di Prisma)
- Kembalikan metadata pagination (`total`, `page`, `limit`, `totalPages`) dan tampilkan kontrol pagination di halaman `/`.

### C. Multi-Role (`ADMIN` vs `USER`)
- Ubah default `role` saat register menjadi `"USER"`, dan sediakan akun `"ADMIN"` lewat `prisma/seed.ts`.
- Update `src/middleware.ts` dan Route Handler `POST/PUT/DELETE /api/products` agar hanya user dengan `session.user.role === "ADMIN"` yang bisa mengakses `/admin` dan mengubah data produk.
- User biasa yang login diarahkan ke halaman `/` atau halaman `/profile`.

### D. Deploy ke Vercel
- Push hasil pekerjaanmu ke repository GitHub pribadi.
- Hubungkan ke **Vercel**, masukkan seluruh Environment Variables (`DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`), dan pastikan aplikasi bisa diakses secara publik!
