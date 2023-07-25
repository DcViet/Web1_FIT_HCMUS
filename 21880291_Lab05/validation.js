(function () {
    var newPassword = document.getElementById("newPassword");
    var confirmPassword = document.getElementById("confirmPassword");

    var checkPasswordValidity = function() {
        if (newPassword.value != confirmPassword.value) {
            confirmPassword.setCustomValidity('Password must match!');
        } else {
            confirmPassword.setCustomValidity('');
        }
    }:
})