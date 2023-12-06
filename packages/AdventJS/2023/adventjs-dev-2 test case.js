function runGiftWorkshopTests() {
  const testCases = [
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

  testCases.forEach((testCase, index) => {
    const { gifts, materials, expected } = testCase;
    const result = manufacture(gifts, materials);

    console.log(`Test Case ${index + 1}:`);
    console.log(`Gifts: ${JSON.stringify(gifts)}`);
    console.log(`Materials: ${materials}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log(`Result: ${JSON.stringify(result)}`);

    // Simple assertion
    if (JSON.stringify(result) === JSON.stringify(expected)) {
      console.log("Pass\n");
    } else {
      console.log("Fail\n");
    }
  });
}

function manufacture(gifts, materials) {
  const materialSet = new Set(materials.split(""));
  const possibleGifts = [];
  for (let i = 0, len = gifts.length; i < len; i++) {
    const giftLetters = gifts[i].split("");
    let isPossibleToManufacture = true;
    for (let j = 0, length = giftLetters.length; j < length; j++) {
      if (!materialSet.has(giftLetters[j])) {
        isPossibleToManufacture = false;
        break;
      }
    }
    if (isPossibleToManufacture) {
      possibleGifts.push(gifts[i]);
    }
  }
  return possibleGifts;
}

// Run the tests
runGiftWorkshopTests();
