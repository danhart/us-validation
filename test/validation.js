var expect = require('chai').expect;
var validation = require('../validation');

describe('validation', function() {
    describe('#email()', function() {
        it('returns true for a valid email address', function() {
            expect(validation.email('test@test.com')).to.be.true;
        });

        it('returns false for an invalid email address', function() {
            expect(validation.email('NOT AN EMAIL ADDRESS')).to.be.false;
        });
    });

    describe('#presence()', function() {
        it('returns true for any truthy value', function() {
            expect(validation.presence('non-empty')).to.be.true;
            expect(validation.presence(123)).to.be.true;
            expect(validation.presence({})).to.be.true;
            expect(validation.presence([])).to.be.true;
            expect(validation.presence(function() {})).to.be.true;
        });

        it('returns false for any falsey value', function() {
            expect(validation.presence('')).to.be.false;
            expect(validation.presence(null)).to.be.false;
            expect(validation.presence(undefined)).to.be.false;
            expect(validation.presence(0)).to.be.false;
            expect(validation.presence(false)).to.be.false;
        });
    });

    describe('#coordinates()', function() {
        it('returns true for valid coordinates', function() {
            expect(validation.coordinates('-51.505918, 0.095383')).to.be.true;
        });

        it('returns false for invalid coordinates', function() {
            expect(validation.coordinates('NOT COORDINATES')).to.be.false;
        });
    });
});
