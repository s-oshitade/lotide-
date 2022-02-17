const {assert} = require('chai');
const map = require('../map');

describe("#map", () => {
  it("returns ['Jake Oshitade', 'Hannah Oshitade', 'Martha Oshitade'] for ['Jake', 'Hannah', 'Martha'], fName => `${fName} Oshitade`", () => {
    assert.deepEqual(map(['Jake', 'Hannah', 'Martha'], fName => `${fName} Oshitade`), ['Jake Oshitade', 'Hannah Oshitade', 'Martha Oshitade']);
  });
  
  it("returns ['Cal', 'Edm', 'Tor'] for ['Calgary', 'Edmonton', 'Toronto'], city => `${city[0]}${city[1]}${city[2]}`", () => {
    assert.deepEqual(map(['Calgary', 'Edmonton', 'Toronto'], city => `${city[0]}${city[1]}${city[2]}`), ['Cal', 'Edm', 'Tor']);
  });

  it("returns ['A', 'B+', 'A+'] for ['Maths A', 'Physics B+', 'Programming A+'], grade => `${grade.slice(- 2).trim()}`", () => {
    assert.deepEqual(map(['Maths A', 'Physics B+', 'Programming A+'], grade => `${grade.slice(- 2).trim()}`), ['A', 'B+', 'A+']);
  });
});