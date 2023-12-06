import findFirstRepeated from "./first-gift-repeated";

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

test("Returns de expected output for multiple test cases", () => {
  const testCases: Array<{ input: Array<number>; expected: number }> = [
    {
      input: [3, 1, 4, 2, 2, 1],
      expected: 2,
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: -1,
    },
    {
      input: [1, 2, 3, 4, 1],
      expected: 1,
    },
    {
      input: [1, 1, 1, 1],
      expected: 1,
    },
    {
      input: [1, 1, 2, 2],
      expected: 1,
    },
    {
      input: [],
      expected: -1,
    },
  ];
  expect(findFirstRepeated(testCases[0]!.input)).toBe(testCases[0]!.expected);
  expect(findFirstRepeated(testCases[1]!.input)).toBe(testCases[1]!.expected);
  expect(findFirstRepeated(testCases[2]!.input)).toBe(testCases[2]!.expected);
  expect(findFirstRepeated(testCases[3]!.input)).toBe(testCases[3]!.expected);
  expect(findFirstRepeated(testCases[4]!.input)).toBe(testCases[4]!.expected);
  expect(findFirstRepeated(testCases[5]!.input)).toBe(testCases[5]!.expected);
});
