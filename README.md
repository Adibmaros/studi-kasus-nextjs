# Level 3 — Migrasi Database ke Supabase (PostgreSQL)

Branch: `level-3-supabase`

## Tujuan Pembelajaran
- Memigrasikan database Prisma 5 dari **MySQL lokal** ke **Supabase (Cloud PostgreSQL)** tanpa mengubah logika bisnis aplikasi.
- Memahami perbedaan **Connection Pooling (`DATABASE_URL`)** vs **Direct Connection (`DIRECT_URL`)** pada Prisma + Supabase.
- Menyiapkan aplikasi agar siap dikembangkan lebih lanjut melalui folder `challenges/` dan siap di-deploy ke cloud (misal Vercel).

## Apa yang Berubah dari Level 2?
Jalankan perintah berikut untuk melihat perubahannya secara langsung:
```bash
git diff level-2-auth-admin..level-3-supabase
```
Inti perubahan ada pada `prisma/schema.prisma`:
- `provider` diubah dari `"mysql"` menjadi `"postgresql"`.
- Menambahkan `directUrl = env("DIRECT_URL")` untuk keperluan `prisma db push` / `prisma migrate`.

## Cara Setup & Menjalankan

### 1. Buat Project di Supabase
1. Buka [supabase.com](https://supabase.com) dan buat project baru (gratis).
2. Setelah project aktif, klik tombol **Connect** di bagian atas dashboard → pilih tab **ORMs** → pilih **Prisma** (atau tab **Connection String**).
3. Salin 2 URL koneksi:
   - **Transaction Pooler (port `6543`)** → masukkan ke `DATABASE_URL` (pastikan ada `?pgbouncer=true`).
   - **Session Pooler / Direct (port `5432`)** → masukkan ke `DIRECT_URL`.

### 2. Install Dependencies & Konfigurasi `.env`
```bash
npm install
cp .env.example .env
```
Isi `DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, dan `AUTH_URL` di `.env`.

### 3. Push Schema ke Supabase & Seeding Data Awal
```bash
npx prisma generate
npx prisma db push
npm run db:seed
```
Buka **Table Editor** di dashboard Supabase untuk memastikan tabel `User` dan `Product` sudah terbuat beserta data awalnya!

Akun admin default hasil seed:
- **Email:** `admin@example.com`
- **Password:** `admin123`

### 4. Jalankan Aplikasi
```bash
npm run dev
```

---

## Langkah Selanjutnya: Kerjakan Tantangan!
Setelah Level 3 berjalan lancar di Supabase, buat branch baru dan kerjakan tantangan di folder [challenges/](./challenges/README.md):
```bash
git checkout -b challenge/nama-kamu
```
1. [Tantangan 1: Tailwind CSS](./challenges/01-tailwindcss.md)
2. [Tantangan 2: shadcn/ui](./challenges/02-shadcn-ui.md)
3. [Tantangan 3: TanStack Query](./challenges/03-tanstack-query.md)
4. [Tantangan 4: Upload File ke Supabase Storage](./challenges/04-supabase-storage-upload.md)
5. [Tantangan 5: Bonus (Zod, Pagination, Multi-Role, Deploy)](./challenges/05-bonus-challenges.md)
