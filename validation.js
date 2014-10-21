(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['./validators/coordinates-validator', './validators/email-validator'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('./validators/coordinates-validator'), require('./validators/email-validator'));
    }
}(function (coordinatesValidator, emailValidator) {
    return {
        presence: function(value) {
            return !!value;
        },
        email: function(email) {
            return emailValidator.validate(email);
        },
        coordinates: function(coordinates) {
            return coordinatesValidator.validate(coordinates);
        }
    };
}));
