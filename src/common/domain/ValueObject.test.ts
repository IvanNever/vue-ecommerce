import { expect, test } from "vitest";
import { ValueObject } from "@/common/domain/ValueObject";

class Test1 extends ValueObject {
  public readonly value: Array<any>;

  constructor(value: Array<any>) {
    super();
    this.value = value;
  }

  protected getEqualityComponents(): Array<any> {
    return this.value;
  }
}

class Test2 extends ValueObject {
  public readonly value: Array<any>;

  constructor(value: Array<any>) {
    super();
    this.value = value;
  }

  protected getEqualityComponents(): Array<any> {
    return this.value;
  }
}

test("should be equal", () => {
  const test1 = new Test1([5]);
  const test2 = new Test1([5]);
  expect(test1.equals(test2)).toBeTruthy();
});

test("should be equal deep", () => {
  const test1 = new Test1([[new Test1([5])]]);
  const test2 = new Test1([[new Test1([5])]]);
  expect(test1.equals(test2)).toBeTruthy();
});

test("should be equal deep with object", () => {
  const testObj = { test: 5 };
  const test1 = new Test1([[testObj]]);
  const test2 = new Test1([[testObj]]);
  expect(test1.equals(test2)).toBeTruthy();
});

test("should be not equal by value", () => {
  const test1 = new Test1([5]);
  const test2 = new Test1([6]);
  expect(test1.equals(test2)).toBeFalsy();
});

test("should be not equal by type", () => {
  const test1 = new Test1([5]);
  const test2 = new Test2([5]);
  expect(test1.equals(test2)).toBeFalsy();
});

test("should be not equal by null", () => {
  const test1 = new Test1([5]);
  expect(test1.equals(null)).toBeFalsy();
});

test("should be not equal deep", () => {
  const test1 = new Test1([[5]]);
  const test2 = new Test1([[true]]);
  expect(test1.equals(test2)).toBeFalsy();
});

test("should be not equal deep with object", () => {
  const test1 = new Test1([[{ test: 5 }]]);
  const test2 = new Test1([[{ test: 5 }]]);
  expect(test1.equals(test2)).toBeFalsy();
});
