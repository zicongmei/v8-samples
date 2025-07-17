// test/math.test.js
import { add, subtract, multiply } from '../src/math.js';
import assert from 'assert';

function runTest(name, fn) {
  try {
    fn();
    console.log(`✅ ${name} passed`);
  } catch (error) {
    console.error(`❌ ${name} failed:`, error.message);
    process.exit(1);
  }
}

runTest('add function', () => {
  assert.strictEqual(add(2, 3), 5, 'add(2, 3) should be 5');
});

runTest('subtract function (positive result)', () => {
  assert.strictEqual(subtract(5, 2), 3, 'subtract(5, 2) should be 3');
});

// We are intentionally NOT covering the 'else' branch of subtract here for demonstration.
// runTest('subtract function (negative result)', () => {
//   assert.strictEqual(subtract(2, 5), 3, 'subtract(2, 5) should be 3');
// });

runTest('multiply function', () => {
  assert.strictEqual(multiply(4, 2), 8, 'multiply(4, 2) should be 8');
});

console.log('All tests finished.');