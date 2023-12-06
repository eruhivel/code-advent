function runTests() {
  const testCases = [
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
      input: [],
      expected: -1,
    },
  ];

  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    const result = findFirstRepeated(input);
    
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(input)}`);
    console.log(`Expected: ${expected}`);
    console.log(`Result: ${result}`);
    
    // Simple assertion
    if (result === expected) {
      console.log("Pass\n");
    } else {
      console.log("Fail\n");
    }
  });
}

// Run the tests
runTests();


function findFirstRepeated(gifts) {
  let firstRepitedGift = -1;
  const giftList = new Set();
  for (let i = 0; i < gifts.length; i++) {
    if (giftList.has(gifts[i])) {
      return gifts[i];
    }
    giftList.add(gifts[i]);
  }
  return firstRepitedGift;
}
