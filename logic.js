function angka(n) {
  let total = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n + 3; j++) {
      total += "*";
    }
    total += "\n";
  }
  return total;
}

console.log(angka(4));
