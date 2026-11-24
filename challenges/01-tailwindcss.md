# Tantangan 1: Migrasi Styling ke Tailwind CSS

Pada Level 1 sampai Level 3, aplikasi sengaja dibuat menggunakan **CSS murni** (`src/app/globals.css`) tanpa framework CSS. Di tantangan ini, kamu akan menginstall dan memigrasi tampilan aplikasi ke **Tailwind CSS**.

## Tujuan Pembelajaran
- Memahami cara install dan konfigurasi Tailwind CSS secara manual pada project Next.js yang sudah berjalan.
- Mengubah class CSS konvensional menjadi utility classes Tailwind CSS.
- Membuat layout responsif untuk desktop dan mobile.

## Kriteria Selesai (Acceptance Criteria)
- [ ] Tailwind CSS terinstall dan terkonfigurasi dengan benar (`postcss.config.mjs` / `tailwind.config.ts` atau Tailwind v4 CSS-first config).
- [ ] Class CSS kustom di `src/app/globals.css` sudah dihapus dan diganti dengan utility classes Tailwind CSS di seluruh halaman dan komponen (`Navbar`, `ProductList`, `ProductForm`, halaman `/`, `/login`, `/register`, `/admin`).
- [ ] Tampilan tetap rapi, konsisten, dan responsif di ukuran layar mobile maupun desktop.
- [ ] `npm run build` berjalan sukses tanpa error.

## Petunjuk (Hints)
1. Ikuti panduan resmi Tailwind CSS untuk Next.js:
   - Tailwind v3: `npm install -D tailwindcss@^3 postcss autoprefixer && npx tailwindcss init -p`
   - atau Tailwind v4: `npm install -D tailwindcss @tailwindcss/postcss postcss`
2. Jika menggunakan Tailwind v3, pastikan `content` di `tailwind.config.ts` mencakup `./src/**/*.{js,ts,jsx,tsx,mdx}`.
3. Mulailah refactor dari `Navbar.tsx` dan `layout.tsx`, lalu lanjut ke halaman katalog (`/`), form login/register, dan dashboard `/admin`.
