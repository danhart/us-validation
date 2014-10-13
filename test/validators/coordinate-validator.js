var expect = require('chai').expect;
var coordinatesValidator = require('../../validators/coordinates-validator');

describe('coordinatesValidator', function() {
    describe('#validate()', function() {
        it('allows coordinates to be negative', function() {
            expect(coordinatesValidator.validate('-51.505918, -0.095383')).to.be.true;
        });

        it('allows coordinates to be positive', function() {
            expect(coordinatesValidator.validate('51.505918, 0.095383')).to.be.true;
        });

        it('allows coordinates to be floats', function() {
            expect(coordinatesValidator.validate('51.505918, 0.095383')).to.be.true;
        });

        it('allows coordinates to be integers', function() {
            expect(coordinatesValidator.validate('51, 0')).to.be.true;
        });

        it('allows multiple spaces after the comma', function() {
            expect(coordinatesValidator.validate('51.505918,    0.095383')).to.be.true;
        });

        it('allows no spaces after the comma', function() {
            expect(coordinatesValidator.validate('51.505918,0.095383')).to.be.true;
        });

        it('does not allow coordinates which are not separated by a comma', function() {
            expect(coordinatesValidator.validate('51.505918 0.095383')).to.be.false;
        });

        it('does not allow any space after the minus sign', function() {
            expect(coordinatesValidator.validate('- 51.505918, - 0.095383')).to.be.false;
        });

        it('does not allow any non-numeric characters in the coordinates', function() {
            expect(coordinatesValidator.validate('51.50A5918, 0.09B5383')).to.be.false;
        });

        it('does not allow any characters besides spaces in between the coordinates', function() {
            expect(coordinatesValidator.validate('51.505918, A 0.095383')).to.be.false;
        });

        it('does not allow any non-numeric characters before the coordinates', function() {
            expect(coordinatesValidator.validate('A51.505918, 0.095383')).to.be.false;
        });

        it('does not allow any non-numeric characters after the coordinates', function() {
            expect(coordinatesValidator.validate('51.505918, 0.095383B')).to.be.false;
        });

        describe('floating point coordinates', function() {
            it('allows up to 6 decimal places', function() {
                expect(coordinatesValidator.validate('-51.505918, -0.095383')).to.be.true;
            });

            it('does not allow more than 6 decimal places', function() {
                expect(coordinatesValidator.validate('-51.505918123, -0.095383123')).to.be.false;
            });

            it('allows less than 6 decimal places', function() {
                expect(coordinatesValidator.validate('-51.50, -0.09')).to.be.true;
            });
        });

        describe('latitude', function() {
            it('allows a minimum value of -90', function() {
                expect(coordinatesValidator.validate('-90, 0')).to.be.true;
            });

            it('allows a maximum value of 90', function() {
                expect(coordinatesValidator.validate('90, 0')).to.be.true;
            });

            it('does not allow a minimum value of less than -90', function() {
                expect(coordinatesValidator.validate('-91, 0')).to.be.false;
            });

            it('does not allow a maximum value of more than 90', function() {
                expect(coordinatesValidator.validate('91, 0')).to.be.false;
            });
        });

        describe('longitude', function() {
            it('allows a minimum value of -180', function() {
                expect(coordinatesValidator.validate('0, -180')).to.be.true;
            });

            it('allows a maximum value of 180', function() {
                expect(coordinatesValidator.validate('0, 180')).to.be.true;
            });

            it('does not allow a minimum value of less than -180', function() {
                expect(coordinatesValidator.validate('0, -181')).to.be.false;
            });

            it('does not allow a maximum value of more than 180', function() {
                expect(coordinatesValidator.validate('0, 181')).to.be.false;
            });
        });
    });
});
