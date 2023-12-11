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

export const weStartTheFactoryTestCases: Array<{
  gifts: Array<string>;
  materials: string;
  expected: Array<string>;
}> = [
  {
    gifts: ["robot", "doll", "train"],
    materials: "roboletdnallir",
    expected: ["robot", "doll", "train"],
  },
  {
    gifts: ["car", "book", "plane"],
    materials: "carbookpl",
    expected: ["car", "book"],
  },
  {
    gifts: ["computer", "keyboard", "mouse"],
    materials: "computexeyboardmouse",
    expected: ["computer", "mouse"],
  },
  {
    gifts: ["toy", "puzzle", "ball"],
    materials: "toypuzzeb",
    expected: ["toy"],
  },
  {
    gifts: ["toy", "puzzle", "ball"],
    materials: "toypuzzleb",
    expected: ["toy", "puzzle"],
  },
  {
    gifts: ["socks", "scarf", "hat"],
    materials: "sosckhcafr",
    expected: ["socks", "scarf"],
  },
  {
    gifts: ["guitar", "drums", "microphone"],
    materials: "guitrmdrohnscoipee",
    expected: ["drums", "microphone"], // Adjusted expected result
  },
  {
    gifts: ["apple", "banana", "orange"],
    materials: "abcd",
    expected: [], // Corrected expected result
  },
  {
    gifts: [],
    materials: "abcd",
    expected: [],
  },
  {
    gifts: ["apple", "banana", "orange"],
    materials: "",
    expected: [], // Adjusted expected result
  },
];
