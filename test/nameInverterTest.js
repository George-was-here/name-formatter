const chai = require('chai');
const assert = chai.assert;

const { nameInverter } = require('../nameInverter');

describe('nameInverter', function() {
  it('returns empty string if name is an empty string', () => {
    const retValue = nameInverter('');
    assert.deepEqual(retValue, '');
  });

  it('should throw an exception if name is undefined', () => {
    let exceptionValue;
    try {
      nameInverter();
    } catch (ex) {
      exceptionValue = ex;
    }
    assert.exists(exceptionValue);
  });

  it('should return a single name when passed a single name', () => {
    const retValue = nameInverter('George');
    assert.deepEqual(retValue, 'George');
  });

  it('should return a single name when passed a padded single name', () => {
    const retValue = nameInverter(' George ');
    assert.deepEqual(retValue, 'George');
  });

  it('should return last name, first name when passed a first and last name', () => {
    const retValue = nameInverter('George Burt');
    assert.deepEqual(retValue, 'Burt, George');
  });

  it('should return last name, first name when passed a padded first and last name', () => {
    const retValue = nameInverter(' George Burt ');
    assert.deepEqual(retValue, 'Burt, George');
  });

  it('should return an empty string when passed a single honorific title', () => {
    const retValue = nameInverter('Dr.');
    assert.deepEqual(retValue, '');
  });

  it('should return an empty string when passed a padded single honorific title', () => {
    const retValue = nameInverter(' Dr. ');
    assert.deepEqual(retValue, '');
  });

  it('should return honorific title last name, first name when passed a honorific title, first and last name', () => {
    const retValue = nameInverter('Dr. George Burt');
    assert.deepEqual(retValue, 'Dr. Burt, George');
  });

  it('should return honorific title last name, first name when passed a padded honorific title, first and last name', () => {
    const retValue = nameInverter(' Dr. George Burt ');
    assert.deepEqual(retValue, 'Dr. Burt, George');
  });

  it('should return honorific title first name when passed a honorific title and first name', () => {
    const retValue = nameInverter('Dr. George');
    assert.deepEqual(retValue, 'Dr. George');
  });

  it('should return honorific title first name when passed a padded honorific title and first name', () => {
    const retValue = nameInverter(' Dr.     George ');
    assert.deepEqual(retValue, 'Dr. George');
  });
});