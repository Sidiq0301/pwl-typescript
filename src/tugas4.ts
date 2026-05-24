// Tugas 4: Function dengan Union Type

function sapaan(parameter: string | number): string {
  if (typeof parameter === "string") {
    return `Halo, ${parameter}`;
  } else {
    return `Umur: ${parameter} tahun`;
  }
}

// Test dengan string
console.log(sapaan("Sidiq"));

// Test dengan number
console.log(sapaan(20));
