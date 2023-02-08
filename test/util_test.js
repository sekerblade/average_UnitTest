const expect = require('chai').expect;
const average = require('../src/util');

describe('average-test', () => {
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    });
      
    it('should return average: 0 when Value is not an array ', () => {
        const arr =  16
        const result = average(arr, 4, 6);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(0);
        expect(result.average).to.equal(0);
    });

    it('should return decent average number when Value is an array ', () => {
        const arr = [2, -999];
        const result = average(arr, 0, 10);

        expect(result.total.valid).to.equal(1);
        expect(result.total.input).to.equal(1);
        expect(result.average).to.equal(2);
    });

    it('should return average: -999 when 1st index of Value is -999 ', () => {
        const arr = [-999,2,3];
        const result = average(arr, 0, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(0);
        expect(result.average).to.equal(-999);
    });

    it('should handles an array that is longer than 100 elements ', () => {
        const arr = [];
        for (let i = 0; i <= 102; i++) {
            arr[i] = i;
        }
        const result = average(arr, 0, 100);

        expect(result.total.valid).to.equal(100);
        expect(result.total.input).to.equal(100);
        expect(result.average).to.equal(49.5);
    });

    it('should not calculate the value of Value(i) When Value(i) is < min ', () => {
        const arr = [1,1,1,1,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(4);
        expect(result.average).to.equal(-999);
    });

    it('should not calculate the value of Value(i) When Value(i) is > max ', () => {
        const arr = [11,11,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(2);
        expect(result.average).to.equal(-999);
    });
    
    it('should calculate the value of Value(i) When Value(i) is in the bound of min and max ', () => {
        const arr = [2,1,3,11,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(2);
        expect(result.total.input).to.equal(4);
        expect(result.average).to.equal(2.5);
    });

  
});
