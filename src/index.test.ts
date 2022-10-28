import { describe, expect, test } from "@jest/globals";
import { hello } from "./index";

describe("hello module", () => {
  test("Say hello to Jane", () => {
    expect(hello("jane")).toBe("Hello jane!");
  });
});
