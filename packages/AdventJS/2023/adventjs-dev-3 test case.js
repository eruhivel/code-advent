function findNaughtyStep(original, modified) {
  let modifiedChar = "";
  if (original.length > modified.length) {
    const modifiedSet = new Set(modified.split(""));
    for (let i = 0; i < original.length; i++) {
      const char = original[i];
      if (!modifiedSet.has(char)) {
        modifiedChar = char;
        break;
      }
    }
  } else {
    const originalSet = new Set(original.split(""));
    for (let i = 0; i < modified.length; i++) {
      const char = modified[i];
      if (!originalSet.has(char)) {
        modifiedChar = char;
        break;
      }
    }
  }
  return modifiedChar;
}

const testCases = [
  { original: "", modified: "", expected: "" }, // Empty strings, no difference
  { original: "", modified: "a", expected: "a" }, // Empty string vs. a non-empty string
  { original: "a", modified: "", expected: "a" }, // A non-empty string vs. empty string
  { original: "abc", modified: "ab", expected: "c" }, // Missing character at the end
  { original: "abc", modified: "bc", expected: "a" }, // Missing character at the end
  { original: "abc", modified: "abcd", expected: "d" }, // Extra character at the end
  { original: "same", modified: "same", expected: "" }, // Identical strings
  { original: "abcd", modified: "abcde", expected: "e" },
  { original: "stepfor", modified: "stepor", expected: "f" },
  { original: "abcde", modified: "abcde", expected: "" },
  { original: "abc", modified: "abcd", expected: "d" },
  { original: "xyz", modified: "xy", expected: "z" },
  { original: "abcdef", modified: "abcfed", expected: "" },
  { original: "12345", modified: "1234", expected: "5" },
  { original: "apple", modified: "appl", expected: "e" },
  { original: "abcd", modified: "abcd", expected: "" },
];

for (const testCase of testCases) {
  const result = findNaughtyStep(testCase.original, testCase.modified);
  console.log(
    `Original: ${testCase.original}, Modified: ${testCase.modified}, Expected: ${testCase.expected}, Result: ${result}`
  );
  console.log(`Test Passed: ${result === testCase.expected}\n`);
}
