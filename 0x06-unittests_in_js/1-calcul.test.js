const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 0 when adding -0.4 and 0.4', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0 when subtracting 1.5 from 1.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 1.5), 0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle division resulting in a fraction', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 2), 2.5);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('INVALID', 1, 2), Error);
    });
  });
});
