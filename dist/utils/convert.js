"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDBDepartmentToDepartment = exports.convertDBUserToUser = void 0;
// Convert db user to user from the interface
const convertDBUserToUser = (dbUser) => {
    return {
        id: dbUser.id,
        first_name: dbUser.first_name,
        last_name: dbUser.last_name,
        title: dbUser.title,
        email: dbUser.email,
        image: dbUser.image,
        department: dbUser.department,
    };
};
exports.convertDBUserToUser = convertDBUserToUser;
// Convert db department to department from the interface
const convertDBDepartmentToDepartment = (dbDepartment) => {
    return {
        id: dbDepartment.id,
        name: dbDepartment.name,
        description: dbDepartment.description,
    };
};
exports.convertDBDepartmentToDepartment = convertDBDepartmentToDepartment;
