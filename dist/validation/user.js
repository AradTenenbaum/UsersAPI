"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUserFields = void 0;
const isValidUserFields = (user) => {
    const errors = [];
    if (user.first_name) {
        if (user.first_name.length < 2) {
            errors.push("first name must have at least 2 characters");
        }
    }
    if (user.last_name) {
        if (user.last_name.length < 2) {
            errors.push("last name must have at least 2 characters");
        }
    }
    if (user.email) {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
            errors.push("email is not valid");
        }
    }
    const validationCheck = {
        isValid: (errors.length == 0),
        messages: errors
    };
    return validationCheck;
};
exports.isValidUserFields = isValidUserFields;
