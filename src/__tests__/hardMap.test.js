import test from 'ava';
import hardMap from '../hardMap';

test('should return tree with iteratee applied to each item', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 10,
  };
  const result = hardMap(x => ({
    value: x.value * 2,
  }), data);
  t.deepEqual(result, expected);
});

test('should work with an array', (t) => {
  const data = [{
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  }];
  const expected = [{
    value: 10,
  }];
  const result = hardMap(x => ({
    value: x.value * 2,
  }), data);
  t.deepEqual(result, expected);
});

test('should work with currying', (t) => {
  const data = {
    value: 5,
    children: [
      {
        value: 10,
        children: [],
      },
    ],
  };
  const expected = {
    value: 10,
  };
  const hardMapDoubleValue = hardMap(x => ({ value: x.value * 2 }));
  const result = hardMapDoubleValue(data);
  t.deepEqual(result, expected);
});
