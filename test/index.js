'use strict';

const chai = require('chai');
const chaiThings = require('chai-things');

const taxOffices = require('../index');

chai.use(chaiThings);
const expect = chai.expect;

describe('The tax offices', function() {
  it('should be an array', function() {
    expect(taxOffices).to.be.an('array');
  });
  it('should contain objects with all required properties', function() {
    expect(taxOffices).to.all.have.property('code');
    expect(taxOffices).to.all.have.property('streetAddress');
    expect(taxOffices).to.all.have.property('postcode');
    expect(taxOffices).to.all.have.property('prefecture');
  });
});
