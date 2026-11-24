# Level 1 — CRUD Dasar Next.js + Prisma 5 + MySQL Lokal

Branch: `level-1-crud-mysql`

## Tujuan Pembelajaran
- Memahami struktur folder Next.js App Router (`src/app`, `src/components`, `src/lib`, `src/types`).
- Menghubungkan Next.js ke **MySQL lokal** menggunakan **Prisma ORM v5**.
- Membuat REST API CRUD menggunakan **Route Handlers** (`src/app/api/products/...`) tanpa Server Actions.
- Memahami proses kompilasi fullstack hingga production build (`npm run build`).

## Struktur Endpoint API
| Method | Endpoint | Fungsi |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Mengambil semua produk |
| `POST` | `/api/products` | Menambahkan produk baru |
| `GET` | `/api/products/[id]` | Mengambil detail 1 produk |
| `PUT` | `/api/products/[id]` | Memperbarui produk |
| `DELETE` | `/api/products/[id]` | Menghapus produk |

## Cara Menjalankan

### 1. Install Dependencies
```bash
npm install
```

### 2. Siapkan Database MySQL Lokal
Pastikan service MySQL sudah menyala (via XAMPP / Laragon / MySQL Server), lalu buat database kosong bernama `studi_kasus_nextjs`:
```sql
CREATE DATABASE studi_kasus_nextjs;
```

### 3. Konfigurasi `.env`
Salin `.env.example` menjadi `.env`, lalu sesuaikan username & password MySQL lokalmu:
```bash
cp .env.example .env
```
Contoh isi `.env`:
```env
DATABASE_URL="mysql://root:@localhost:3306/studi_kasus_nextjs"
```

### 4. Push Schema Prisma & Seeding Data Awal
```bash
npx prisma db push
npm run db:seed
```

### 5. Jalankan Aplikasi
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000).

### 6. Uji Build Production
```bash
npm run build
npm run start
```

---

## Langkah Selanjutnya
Setelah memahami Level 1, lanjut ke Level 2 (Autentikasi Admin dengan Auth.js):
```bash
git checkout level-2-auth-admin
```
