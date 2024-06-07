const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.test');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when adding 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when adding -0.5 and 0.5', () => {
      expect(calculateNumber('SUM', -0.5, 0.5)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when subtracting 1.4 from 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when subtracting 1.5 from 1.5', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 1.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when dividing 1.4 by 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle division resulting in a fraction', () => {
      expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw(Error);
    });
  });
});
