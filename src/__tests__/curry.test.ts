import { curry } from "../algorithmic/curry";

const sum = (...numbers: number[]): number =>
    numbers.reduce((a, b) => a + b, 0);
const curried = curry(sum);

test("Curry", () => {
  expect(curried()).toEqual(0);
  expect(curried(1, 2)()).toEqual(3);
  expect(curried(1)(2)()).toEqual(3);
  expect(curried(1)(0)(1)(1)()).toEqual(3);
  expect(curried(1)(10)(1)(0)(1)()).toEqual(13);
});
