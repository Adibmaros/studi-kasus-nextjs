# Tantangan 2: Integrasi Komponen shadcn/ui

Setelah Tailwind CSS terpasang (Tantangan 1), tingkatkan kualitas UI dan UX aplikasi menggunakan **shadcn/ui**.

## Tujuan Pembelajaran
- Memahami konsep *copy-paste component library* berbasis Radix UI & Tailwind CSS.
- Mengganti elemen form, tabel, dan konfirmasi browser (`window.confirm` / `alert`) dengan komponen UI yang modern dan aksesibel.

## Kriteria Selesai (Acceptance Criteria)
- [ ] `shadcn/ui` berhasil diinisialisasi (`npx shadcn@latest init`) dan file `components.json` serta `src/lib/utils.ts` terbentuk.
- [ ] Minimal komponen berikut sudah diinstall dan digunakan di aplikasi:
  - `Button`, `Input`, `Label`, `Textarea` (untuk form Login, Register, Create/Edit Product)
  - `Card` (untuk katalog produk di halaman publik `/` dan form auth)
  - `Table` (untuk daftar produk di dashboard `/admin`)
  - `AlertDialog` atau `Dialog` (untuk menggantikan `window.confirm()` saat menghapus produk)
  - `Sonner` / `Toast` (untuk notifikasi sukses/error saat login, tambah, edit, atau hapus produk)
- [ ] Tidak ada lagi `window.alert()` atau `window.confirm()` di dalam kode.
- [ ] `npm run build` berjalan sukses tanpa error.

## Petunjuk (Hints)
1. Jalankan `npx shadcn@latest init` di root project.
2. Tambah komponen satu per satu, contoh:
   ```bash
   npx shadcn@latest add button input label card table alert-dialog sonner
   ```
3. Pasang `<Toaster />` dari `sonner` di `src/app/layout.tsx` agar notifikasi bisa dipanggil dari halaman mana saja.
