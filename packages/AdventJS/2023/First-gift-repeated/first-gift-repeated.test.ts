import { firstGiftRepeatedTestCases } from "../test-cases";
import findFirstRepeated from "./first-gift-repeated";

describe("First gift repeated!", () => {
  test('Returns a type "number"', () => {
    const emptyGifts: Array<number> = [];
    const gifts: Array<number> = [3, 1, 4, 2, 2, 1];
    expect(typeof findFirstRepeated(emptyGifts)).toBe("number");
    expect(typeof findFirstRepeated(gifts)).toBe("number");
  });

  test('Returns "-1" when input is an empty array "[]"', () => {
    const emptyGifts: Array<number> = [];
    expect(findFirstRepeated(emptyGifts)).toBe(-1);
  });
  test.each(firstGiftRepeatedTestCases)(
    "Returns de expected output for test case",
    ({ input, expected }: { input: Array<number>; expected: number }) => {
      expect(findFirstRepeated(input)).toBe(expected);
    }
  );
});
