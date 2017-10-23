import toBeTrue from './toBeTrue';
import toContainValue from './toContainValue';
import toContainValues from './toContainValues';
import toEqualCaseInsensitive from './toEqualCaseInsensitive';
import toBePositive from './toBePositive';
import toBeNaN from './toBePositive';

export default [toBeTrue, toContainValue, toContainValues, toEqualCaseInsensitive, toBePositive, toBeNaN].reduce(
  (acc, matcher) => ({ ...acc, ...matcher }),
  {}
);
