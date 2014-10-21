(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    }
}(function () {
    var COORDINATES_PATTERN = /^(-)?\d{1,2}(\.\d{1,6})?, *(-)?\d{1,3}(\.\d{1,6})?$/;

    var validatesAgainstPattern = function(coordinates) {
        return COORDINATES_PATTERN.test(coordinates);
    };

    var isWithinRange = function(coordinates) {
        var coordinates = coordinates.split(',');
        return latitudeIsWithinRange(coordinates[0]) && longitudeIsWithinRange(coordinates[1]);
    };

    var latitudeIsWithinRange = function(latitude) {
        return Math.abs(latitude) <= 90;
    };

    var longitudeIsWithinRange = function(longitude) {
        return Math.abs(longitude) <= 180;
    };

    return {
        validate: function(coordinates) {
            return validatesAgainstPattern(coordinates) && isWithinRange(coordinates);
        }
    };
}));
