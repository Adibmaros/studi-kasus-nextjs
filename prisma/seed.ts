import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const existingCount = await prisma.product.count();

  if (existingCount > 0) {
    console.log("Data produk sudah ada, melewati seeding.");
    return;
  }

  await prisma.product.createMany({
    data: [
      {
        name: "Keyboard Mechanical Wireless",
        description: "Keyboard mechanical 75% dengan hot-swappable switch dan koneksi tri-mode.",
        price: 750000,
        stock: 15,
      },
      {
        name: "Mouse Ergonomis Silent",
        description: "Mouse wireless ergonomis untuk produktivitas harian tanpa suara klik.",
        price: 250000,
        stock: 30,
      },
      {
        name: "Monitor IPS 24 Inch Full HD",
        description: "Monitor 24 inch panel IPS 100Hz, nyaman untuk coding dan desain.",
        price: 1850000,
        stock: 8,
      },
    ],
  });

  console.log("Seeding produk awal berhasil!");
}

main()
  .catch((error) => {
    console.error("Gagal melakukan seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
