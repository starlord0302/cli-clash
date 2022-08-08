export function generateRandomTo100() {
  return Math.floor(Math.random() * (100 + 1));
}

export function generateRandomToMax(max: number) {
  return Math.floor(Math.random() * (max + 1));
}
