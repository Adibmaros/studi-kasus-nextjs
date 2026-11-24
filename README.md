# Level 2 — Autentikasi Admin dengan Auth.js (NextAuth v5)

Branch: `level-2-auth-admin`

## Tujuan Pembelajaran
- Menambahkan tabel `User` di Prisma (`email`, `password` ter-hash dengan `bcryptjs`, `role: "ADMIN"`).
- Menerapkan autentikasi **Credentials (Email & Password)** menggunakan **Auth.js (NextAuth v5)** dengan pola *Split Config* (`auth.config.ts` untuk Edge Middleware + `auth.ts` untuk server).
- Membuat fitur **Register** (`/api/auth/register`) dan **Login** (`/login`) menggunakan Route Handlers.
- Memisahkan halaman publik (`/`) dan halaman khusus admin (`/admin/*`) yang diproteksi oleh `src/middleware.ts`.
- Memproteksi API mutasi (`POST`, `PUT`, `DELETE` pada `/api/products`) agar mengembalikan `401 Unauthorized` jika belum login.

## Struktur Endpoint API
| Method | Endpoint | Akses | Fungsi |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Publik | Registrasi akun admin baru |
| `GET/POST` | `/api/auth/[...nextauth]` | Publik | Endpoint autentikasi Auth.js (login, session, signout) |
| `GET` | `/api/products` | Publik | Mengambil semua produk |
| `GET` | `/api/products/[id]` | Publik | Mengambil detail 1 produk |
| `POST` | `/api/products` | **Admin (Login)** | Menambahkan produk baru |
| `PUT` | `/api/products/[id]` | **Admin (Login)** | Memperbarui produk |
| `DELETE` | `/api/products/[id]` | **Admin (Login)** | Menghapus produk |

## Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Konfigurasi `.env`
Salin `.env.example` menjadi `.env` (atau update `.env` dari Level 1 dengan menambahkan `AUTH_SECRET` & `AUTH_URL`):
```env
DATABASE_URL="mysql://root:@localhost:3306/studi_kasus_nextjs"
AUTH_SECRET="ganti-dengan-random-secret-minimal-32-karakter"
AUTH_URL="http://localhost:3000"
```
*(Tips: jalankan `npx auth secret` untuk men-generate `AUTH_SECRET` acak yang aman.)*

### 3. Push Schema Prisma & Seeding Data Awal
```bash
npx prisma db push
npm run db:seed
```
Seeding akan membuat akun admin default:
- **Email:** `admin@example.com`
- **Password:** `admin123`

Kamu juga bisa mendaftar akun baru lewat halaman `/register`.

### 4. Jalankan Aplikasi
```bash
npm run dev
```
- Katalog publik: [http://localhost:3000](http://localhost:3000)
- Login admin: [http://localhost:3000/login](http://localhost:3000/login)
- Dashboard admin (wajib login): [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Bandingkan Perubahan dari Level 1
```bash
git diff --stat level-1-crud-mysql..level-2-auth-admin
```

## Langkah Selanjutnya
Lanjut ke Level 3 untuk migrasi database dari MySQL lokal ke **Supabase (PostgreSQL)**:
```bash
git checkout level-3-supabase
```
