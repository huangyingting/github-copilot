import {describe, it} from 'mocha';
import {expect} from 'chai';

import {validateDate, validateIPV6} from '../utils/validators';

// test the validataDate function
describe('validateDate', () => {
  it('should return a Date object', () => {
    const date = validateDate('01/01/2020');
    expect(date).to.be.an.instanceof(Date);
  });
  it('should return the correct date', () => {
    const date = validateDate('01/01/2020');
    expect(date).to.eql(new Date('2020-01-01'));
  });
});

// test the validateIPV6 function
describe('validateIPV6', () => {
  it('should return true for a valid IPV6 address', () => {
    const validIP = '2001:0db8:85a3:0000:0000:8a2e:0370:7334';
    expect(validateIPV6(validIP)).to.be.true;
  });
  it('should return false for an invalid IPV6 address', () => {
    const invalidIP = '2001:0db8:85a3:0000:0000:8a2e:0370:7334:0000';
    expect(validateIPV6(invalidIP)).to.be.false;
  });
});
