// It is notoriously difficult to write an RFC-compliant email address
// validator.  As such, on the client-side, we really do not want to be too
// strict and risk the possibility of false-positive validation failures.
// Instead, it's best to keep this pattern check rather lightweight.
var EMAIL_PATTERN = /.+@.+\..+/i;

exports.validate = function(email) {
    return EMAIL_PATTERN.test(email);
};
