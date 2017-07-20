'use strict';

const obj1 = {
  a: '1',
  b: 'this is the letter b',
  f: {
    foo: 'what is a foo anyway',
    bar: [1, 5, '3', 4]
  }
};

const obj2 = {
  a: 1,
  b: 'this is the letter b',
  f: {
    foo: 'what is a foo anyway',
    bar: [1, 5, 3, 4]
  }
};

function equal(a, b, mode) {
  const eq = mode === 'strict' ? a === b : a == b;
  if (eq) {
    return true;
  }

  if (a && b &&
    typeof a == 'object' &&
    typeof b == 'object' &&
    Object.keys(a).length == Object.keys(b).length) {

    const keys = Object.keys(a);
    for (const key of keys) {
      if (b.hasOwnProperty(key)) {
        const aValue = a[key];
        const bValue = b[key];
        if (!equal(aValue, bValue, mode)) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }
  return false;
};

console.log('objects are equal: ' + equal(obj1, obj2));
console.log('objects are strictly equal: ' + equal(obj1, obj2, 'strict'));
