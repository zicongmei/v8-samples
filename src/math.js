// src/math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a; // This branch might not be covered by all tests
  }
}

export function multiply(a, b) {
  return a * b;
}