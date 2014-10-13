var coordinatesValidator = require('./validators/coordinates-validator');
var emailValidator = require('./validators/email-validator');

exports.presence = function(value) {
    return !!value;
};

exports.email = function(email) {
    return emailValidator.validate(email);
};

exports.coordinates = function(coordinates) {
    return coordinatesValidator.validate(coordinates);
};
