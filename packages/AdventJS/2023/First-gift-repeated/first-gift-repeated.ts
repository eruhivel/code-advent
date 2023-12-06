export default function findFirstRepeated(gifts: Array<number>): number {
  let firstRepitedGift: number = -1;
  const giftList = new Set<number>();
  gifts.forEach((gift: number) => {
    if (giftList.has(gift)) {
      console.log(gift);
      firstRepitedGift = gift;
    }
  });
  return firstRepitedGift;
}
