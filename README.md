# Studi Kasus Next.js Fullstack Bertingkat

Selamat datang di repository pembelajaran **Next.js Fullstack (App Router + TypeScript + Prisma 5)**!  
Repository ini dirancang secara bertingkat menggunakan **Git Branch**, sehingga kamu bisa belajar langkah demi langkah dan membandingkan perubahan kode antar tingkatan menggunakan `git diff`.

---

## Prasyarat

Pastikan perangkat kamu sudah terinstall:
- **Node.js** v18.18+ atau v20+ (`node -v`)
- **Git** (`git --version`)
- **MySQL Lokal** (bisa lewat XAMPP, Laragon, MySQL Workbench, atau Docker) — untuk Level 1 & Level 2
- **Akun Supabase** (gratis di [supabase.com](https://supabase.com)) — untuk Level 3 & Tantangan

---

## Peta Tingkatan (Git Branches)

| Branch | Fokus Pembelajaran | Database |
| :--- | :--- | :--- |
| `main` *(branch ini)* | Panduan utama & daftar tantangan lanjutan (`challenges/`) | — |
| `level-1-crud-mysql` | Fundamental Next.js Fullstack, Prisma 5, CRUD via Route Handlers, dan build production | MySQL Lokal |
| `level-2-auth-admin` | Autentikasi dengan Auth.js (NextAuth v5), Register & Login, Middleware & Proteksi API Admin | MySQL Lokal |
| `level-3-supabase` | Migrasi database dari MySQL lokal ke Cloud PostgreSQL (Supabase) + Connection Pooling | Supabase (PostgreSQL) |

---

## Cara Mulai Belajar

### 1. Clone Repository
```bash
git clone <url-repo-ini>
cd studi-kasus-nextjs
```

### 2. Pindah ke Level 1 Terlebih Dahulu
```bash
git checkout level-1-crud-mysql
```
Baca file `README.md` di dalam branch `level-1-crud-mysql` untuk instruksi setup database, `.env`, dan cara menjalankan aplikasi.

### 3. Lanjut ke Level Berikutnya
Setelah paham Level 1, pindah ke Level 2 lalu Level 3:
```bash
git checkout level-2-auth-admin
# atau
git checkout level-3-supabase
```

### 4. Tips Belajar Efektif dengan `git diff`
Kamu bisa melihat **persis file apa saja yang berubah** saat naik tingkat:
```bash
# Lihat perubahan dari Level 1 ke Level 2 (penambahan Auth & Admin)
git diff --stat level-1-crud-mysql..level-2-auth-admin

# Lihat perubahan dari Level 2 ke Level 3 (migrasi ke Supabase)
git diff level-2-auth-admin..level-3-supabase
```

---

## Tantangan Lanjutan (`challenges/`)

Setelah menyelesaikan Level 1 sampai Level 3, saatnya praktik mandiri!  
Buat branch baru dari `level-3-supabase` (misalnya `git checkout -b challenge-nama-kamu level-3-supabase`), lalu kerjakan tantangan secara berurutan:

1. [Tantangan 1: Migrasi Styling ke Tailwind CSS](./challenges/01-tailwindcss.md)
2. [Tantangan 2: Integrasi Komponen shadcn/ui](./challenges/02-shadcn-ui.md)
3. [Tantangan 3: Data Fetching & Caching dengan TanStack Query](./challenges/03-tanstack-query.md)
4. [Tantangan 4: File Upload ke Supabase Storage & Modifikasi Schema Prisma](./challenges/04-supabase-storage-upload.md)
5. [Tantangan Bonus: Zod, Search/Pagination, dan Multi-Role](./challenges/05-bonus-challenges.md)

Lihat ringkasan lengkapnya di [challenges/README.md](./challenges/README.md).
