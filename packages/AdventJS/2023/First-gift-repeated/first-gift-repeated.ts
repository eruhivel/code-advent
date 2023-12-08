export default function findFirstRepeated(gifts: Array<number>): number {
  const giftSet = new Set<number>();
  for (const gift of gifts) {
    if (giftSet.has(gift)) {
      return gift;
    }
    giftSet.add(gift);
  }
  return -1;
}
