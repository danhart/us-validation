var expect = require('chai').expect;
var emailValidator = require('../../validators/email-validator');

describe('emailValidator', function() {
    describe('#validate()', function() {
        it('does not allow an email address without an "@"', function() {
            expect(emailValidator.validate('testtest.com')).to.be.false;
        });

        it('does not allow an email address with nothing before the "@"', function() {
            expect(emailValidator.validate('@test.com')).to.be.false;
        });

        it('does not allow an email address with nothing after the "@"', function() {
            expect(emailValidator.validate('test@')).to.be.false;
        });

        it('does not allow an email address with no top-level domain', function() {
            expect(emailValidator.validate('test@test')).to.be.false;
        });

        it('allows a passing email address', function() {
            expect(emailValidator.validate('test@test.com')).to.be.true;
        });

        it('allows an email address regardless of the case of the characters', function() {
            expect(emailValidator.validate('TEST@TEST.COM')).to.be.true;
        });
    });
});
