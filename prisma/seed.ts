import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // 1. Seed akun Admin default
  const adminEmail = "admin@example.com";
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.user.create({
      data: {
        name: "Admin Utama",
        email: adminEmail,
        password: hashedPassword,
        role: "ADMIN",
      },
    });
    console.log("Seeding akun admin default berhasil (admin@example.com / admin123)");
  } else {
    console.log("Akun admin default sudah ada, melewati seeding user.");
  }

  // 2. Seed data produk awal
  const existingProductCount = await prisma.product.count();

  if (existingProductCount === 0) {
    await prisma.product.createMany({
      data: [
        {
          name: "Keyboard Mechanical Wireless",
          description:
            "Keyboard mechanical 75% dengan hot-swappable switch dan koneksi tri-mode.",
          price: 750000,
          stock: 15,
        },
        {
          name: "Mouse Ergonomis Silent",
          description:
            "Mouse wireless ergonomis untuk produktivitas harian tanpa suara klik.",
          price: 250000,
          stock: 30,
        },
        {
          name: "Monitor IPS 24 Inch Full HD",
          description:
            "Monitor 24 inch panel IPS 100Hz, nyaman untuk coding dan desain.",
          price: 1850000,
          stock: 8,
        },
      ],
    });
    console.log("Seeding produk awal berhasil!");
  } else {
    console.log("Data produk sudah ada, melewati seeding produk.");
  }
}

main()
  .catch((error) => {
    console.error("Gagal melakukan seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
