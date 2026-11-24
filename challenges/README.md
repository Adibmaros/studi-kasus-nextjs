# Daftar Tantangan Lanjutan

Tantangan ini dirancang untuk melatih kemampuanmu mengembangkan aplikasi Next.js Fullstack dari kode dasar (`level-3-supabase`) menjadi aplikasi modern siap produksi.

## Persiapan Sebelum Mengerjakan

Pastikan kamu sudah menyelesaikan dan memahami `level-3-supabase`, lalu buat branch baru agar kode referensi tetap bersih:

```bash
git checkout level-3-supabase
git checkout -b challenge/nama-kamu
```

## Daftar Tantangan

| No | Tantangan | Topik Utama | Tingkat |
| :--- | :--- | :--- | :--- |
| 1 | [01-tailwindcss.md](./01-tailwindcss.md) | Install & konfigurasi Tailwind CSS, refactor UI | Pemula |
| 2 | [02-shadcn-ui.md](./02-shadcn-ui.md) | Setup shadcn/ui, ganti form, table, modal, dan toast | Pemula - Menengah |
| 3 | [03-tanstack-query.md](./03-tanstack-query.md) | Refactor `fetch` ke `useQuery` & `useMutation` | Menengah |
| 4 | [04-supabase-storage-upload.md](./04-supabase-storage-upload.md) | Modifikasi Prisma Schema + Upload gambar ke Supabase Storage | Menengah - Lanjut |
| 5 | [05-bonus-challenges.md](./05-bonus-challenges.md) | Validasi Zod, Search & Pagination, Multi-Role | Opsional / Bonus |

## Aturan Main
- Commit setiap kali menyelesaikan 1 tantangan dengan pesan commit yang jelas (contoh: `feat: migrate styling to tailwindcss`).
- Pastikan `npm run build` tetap lulus tanpa error TypeScript/ESLint di akhir setiap tantangan.
- Tetap gunakan **Route Handlers** (`src/app/api/...`) untuk komunikasi ke backend/database.
