// Tugas 3: Class Sederhana

class Lingkaran {
  jariJari: number;

  constructor(jariJari: number) {
    this.jariJari = jariJari;
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

const lingkaran1 = new Lingkaran(7);

console.log("=== Lingkaran ===");
console.log(`Jari-jari  : ${lingkaran1.jariJari}`);
console.log(`Luas       : ${lingkaran1.hitungLuas().toFixed(2)}`);
