"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByQueryString = exports.partialUpdateQueryString = void 0;
const addParameters = (data) => {
    let query = "";
    if (data.first_name)
        query += ' "first_name" = ' + `'${data.first_name}',`;
    if (data.last_name)
        query += ' "last_name" = ' + `'${data.last_name}',`;
    if (data.title)
        query += ' "title" = ' + `'${data.title}',`;
    if (data.email)
        query += ' "email" = ' + `'${data.email}',`;
    if (data.image)
        query += ' "image" = ' + `'${data.image}',`;
    if (data.department)
        query += ' "department" = ' + data.department + ",";
    return query;
};
const partialUpdateQueryString = (id, data) => {
    let query = 'UPDATE "user" SET';
    query += addParameters(data);
    query = query.slice(0, -1);
    query += ' WHERE "id" = ' + id;
    return query;
};
exports.partialUpdateQueryString = partialUpdateQueryString;
const addParametersWithAND = (data) => {
    let query = "";
    if (data.first_name)
        query += ' "first_name" = ' + `'${data.first_name}' AND`;
    if (data.last_name)
        query += ' "last_name" = ' + `'${data.last_name}' AND`;
    if (data.title)
        query += ' "title" = ' + `'${data.title}' AND`;
    if (data.email)
        query += ' "email" = ' + `'${data.email}' AND`;
    if (data.image)
        query += ' "image" = ' + `'${data.image}' AND`;
    if (data.department)
        query += ' "department" = ' + data.department + " AND";
    return query;
};
const getByQueryString = (data) => {
    let query = 'SELECT * FROM "user"';
    let addQuery = addParametersWithAND(data);
    if (data.id)
        addQuery += ' "id" = ' + data.id + " AND";
    if (addQuery.length > 0) {
        query += ' WHERE';
        query += addQuery;
        query = query.slice(0, -3);
    }
    return query;
};
exports.getByQueryString = getByQueryString;
