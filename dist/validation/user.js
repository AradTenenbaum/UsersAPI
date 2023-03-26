"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDepartment = exports.isValidUserFields = void 0;
// Validate user fields
const isValidUserFields = (user) => {
    const errors = [];
    // first name should contains at least 2 characters
    if (user.first_name) {
        if (user.first_name.length < 2) {
            errors.push("first name must have at least 2 characters");
        }
    }
    // first last should contains at least 2 characters
    if (user.last_name) {
        if (user.last_name.length < 2) {
            errors.push("last name must have at least 2 characters");
        }
    }
    // email must be valid, compare by regex expression
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
// validaton for department
const isValidDepartment = (department) => {
    const errors = [];
    // department name must with at least 2 characters
    if (department.name) {
        if (department.name.length < 2) {
            errors.push("department name must have at least 2 characters");
        }
    }
    const validationCheck = {
        isValid: (errors.length == 0),
        messages: errors
    };
    return validationCheck;
};
exports.isValidDepartment = isValidDepartment;
