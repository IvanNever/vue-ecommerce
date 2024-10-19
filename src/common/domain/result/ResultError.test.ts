import { expect, test } from "vitest";
import { ResultError } from "@/common/domain/result/ResultError";

test("should be equal", () => {
  const error1 = new ResultError("Test1", "Test1 description");
  const error2 = new ResultError("Test1", "Test2 description");
  expect(error1.equals(error2)).toBeTruthy();
});

test("should be not equal", () => {
  const error1 = new ResultError("Test1", "Test1 description");
  const error2 = new ResultError("Test2", "Test2 description");
  expect(error1.equals(error2)).toBeFalsy();
});
