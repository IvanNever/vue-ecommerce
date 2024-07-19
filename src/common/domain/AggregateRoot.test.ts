import { expect, test } from "vitest";
import { AggregateRoot } from "@/common/domain/AggregateRoot";

class Test1 extends AggregateRoot {
  constructor(id: number) {
    super(id);
  }
}

class Test2 extends AggregateRoot {
  constructor(id: number) {
    super(id);
  }
}

test("should be equal", () => {
  const test1 = new Test1(5);
  const test2 = new Test1(5);
  expect(test1.equals(test2)).toBeTruthy();
});

test("should be not equal by value", () => {
  const test1 = new Test1(5);
  const test2 = new Test1(6);
  expect(test1.equals(test2)).toBeFalsy();
});

test("should be not equal by type", () => {
  const test1 = new Test1(5);
  const test2 = new Test2(5);
  expect(test1.equals(test2)).toBeFalsy();
});

test("should be not equal by null", () => {
  const test1 = new Test1(5);
  expect(test1.equals(null)).toBeFalsy();
});
