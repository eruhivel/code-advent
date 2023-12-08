export const firstGiftRepeatedTestCases: Array<{
  input: Array<number>;
  expected: number;
}> = [
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
