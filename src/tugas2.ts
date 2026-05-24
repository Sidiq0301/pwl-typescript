// Tugas 2: Menggunakan Interface

interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

const buku1: Buku = {
  judul: "Pemrograman TypeScript Dasar",
  pengarang: "Budi Santoso",
  tahunTerbit: 2023,
  tersedia: true
};

console.log("=== Data Buku ===");
console.log(`Judul      : ${buku1.judul}`);
console.log(`Pengarang  : ${buku1.pengarang}`);
console.log(`Tahun Terbit: ${buku1.tahunTerbit}`);
console.log(`Tersedia   : ${buku1.tersedia ? "Ya" : "Tidak"}`);