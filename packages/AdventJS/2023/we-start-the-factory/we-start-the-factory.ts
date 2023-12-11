export default function manufacture(
  gifts: Array<string>,
  materials: string
): Array<string> {
  const materialSet = new Set(materials.split(""));
  const possibleGifts = [];
  for (const gift of gifts) {
    const giftLetters = gift.split("");
    let isPossibleToManufacture = true;
    for (const letter of giftLetters) {
      if (!materialSet.has(letter)) {
        isPossibleToManufacture = false;
        break;
      }
    }
    if (isPossibleToManufacture) {
      possibleGifts.push(gift);
    }
  }
  return possibleGifts;
}
