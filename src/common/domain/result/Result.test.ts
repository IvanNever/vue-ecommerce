import { expect, test } from "vitest";
import { ResultError } from "@/common/domain/result/ResultError";
import { Result } from "@/common/domain/result/Result";
import { AccessErrorsResultError } from "@/common/domain/result/AccessErrorsResultError";
import { AccessesSuccessResultError } from "@/common/domain/result/AccessesSuccessResultError";

test("should be ok", () => {
  const result = Result.success("Success");
  expect(result.isSuccess).toBeTruthy();
  expect(result.value).toEqual("Success");
});

test("should be fail", () => {
  const result = Result.failure(new ResultError("Error", "Error Description"));
  expect(result.isFailure).toBeTruthy();
  expect(result.errors.length).toEqual(1);
  expect(result.errors[0].code).toEqual("Error");
  expect(result.errors[0].description).toEqual("Error Description");
});

test("should failure access error", () => {
  const result = Result.success();
  expect(result.isSuccess).toBeTruthy();
  expect(() => result.errors).toThrowError(AccessErrorsResultError);
});

test("should success access error", () => {
  const result = Result.failure();
  expect(result.isFailure).toBeTruthy();
  expect(() => result.value).toThrowError(AccessesSuccessResultError);
});

test("should include error", () => {
  const error = new ResultError("Error", "Error Description");
  const result = Result.failure(error);
  expect(result.includesError(error)).toBeTruthy();
});

test("should not include error", () => {
  const error1 = new ResultError("Error1", "Error Description");
  const error2 = new ResultError("Error2", "Error Description");
  const result = Result.failure(error1);
  expect(result.includesError(error2)).toBeFalsy();
});
