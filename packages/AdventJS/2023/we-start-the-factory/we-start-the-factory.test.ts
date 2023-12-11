import { weStartTheFactoryTestCases } from "../test-cases";
import manufacture from "./we-start-the-factory";

describe("We start the factory", () => {
  test("Returns an array", () => {
    const gifts: Array<string> = ["robot", "doll", "train"];
    const materials: string = "roboletdnallir";
    expect(Array.isArray(manufacture(gifts, materials))).toEqual(true);
  });

  test.each(weStartTheFactoryTestCases)(
    "Returns de expected output for test case",
    ({
      gifts,
      materials,
      expected,
    }: {
      gifts: Array<string>;
      materials: string;
      expected: Array<string>;
    }) => {
      expect(manufacture(gifts, materials)).toStrictEqual(expected);
    }
  );
});
