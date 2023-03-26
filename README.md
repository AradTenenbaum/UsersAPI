# Users API
### Api built with NodeJS - Express and PostgreSQL

The api conatins users CRUD operations and departments create, delete functions. Each user is related to a department(Many to One) and there is a list function to get all departments and the number of users each department contains. 

### Routes:
 1. /api/users - get all users(possible to add parameters)
 2. /api/users/create - create a new user
 3. /api/users/delete/:id - delete the user with the id in the param
 4. /api/users/update/:id - update the user's details
 5. /api/departments/list - get all departments' names, descriptions and number of users related to them
 6. /api/departments/create - create a new department
 7. /api/departments/delete/:id - delete the department with the id in the param