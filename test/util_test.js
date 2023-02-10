const expect = require('chai').expect;
const average = require('../src/util');

describe('average-test', () => {
    it('should pass this canary test', function() {
        expect(true).to.be.true;
    });
      
    it('should return average: 0 when {Value} is not an array ', () => {
        const arr =  16
        const result = average(arr, 4, 6);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(0);
        expect(result.average).to.equal(0);
    });

    it('should return average: -999 when 1st index of the array is -999 ', () => {
        const arr = [-999,2,3];
        const result = average(arr, 0, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(0);
        expect(result.average).to.equal(-999);
    });

    it('should return average: -999  When all numbers in an array is < min ', () => {
        const arr = [1,1,1,1,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(4);
        expect(result.average).to.equal(-999);
    });

    it('should return average: -999  When all numbers in an array is > max ', () => {
        const arr = [11,11,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(2);
        expect(result.average).to.equal(-999);
    });
    
    it('should return the average of valid numbers in an array ', () => {
        const arr = [2,1,3,11,-999];
        const result = average(arr, 2, 10);

        expect(result.total.valid).to.equal(2);
        expect(result.total.input).to.equal(4);
        expect(result.average).to.equal(2.5);
    });

    it('should return the average of valid numbers within the specified range with a maximum of 100 inputs', () => {
        const arr = [];
        for (let i = 0; i <= 102; i++) {
            arr[i] = i;
        }
        const result = average(arr, 0, 100);
        expect(result.total.valid).to.equal(100);
        expect(result.total.input).to.equal(100);
        expect(result.average).to.equal(49.5);
    });

    it('It should return total.input = 100 , If the range of The array is < 100 and does not contain the value -999', () => {
        const arr = [1,2,3,4,5];
        const result = average(arr, 0, 10);

        expect(result.total.valid).to.equal(5);
        expect(result.total.input).to.equal(100);
        expect(result.average).to.equal(3);
    });

    it('It should return all 0 When argument is missing', () => {
        const result = average();

        expect(result.total.valid).to.equal(0);
        expect(result.total.input).to.equal(0);
        expect(result.average).to.equal(0);
    });

  
});
