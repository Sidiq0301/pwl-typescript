function hello(nama: string, umur: number): string {
    // Pastikan setelah kata 'umur' yang dipanggil adalah variabel 'umur'
    return 'Selamat Datang ' + nama + ' di PWL, umur Anda adalah ' + umur;
} 

const mahasiswa = "Sidiq";
const usia: number = 19;
console.log(hello(mahasiswa, usia));