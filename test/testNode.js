const assert = require('assert').strict;
const { greet } = require('../dist/bundle.js'); // Adjust path as needed

try {
  assert.strictEqual(greet('Node'), 'Hello, Node!', 'Greet function failed');
  console.log('Node.js test passed successfully.');
} catch (error) {
  console.error('Node.js test failed:', error);
}
