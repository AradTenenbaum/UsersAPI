"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDBUserToUser = void 0;
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
