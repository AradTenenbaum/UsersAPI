import { GetUser, User } from "../interfaces/user.interface";
import { ValidationCheck } from "../interfaces/validation.interface";

export const isValidUserFields = (user: User): ValidationCheck => {
    const errors = [];
    if(user.first_name) {
        if(user.first_name.length < 2) {
            errors.push("first name must have at least 2 characters")
        } 
    }
    if(user.last_name) {
        if(user.last_name.length < 2) {
            errors.push("last name must have at least 2 characters")
        }
    }
    if(user.email) {
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
            errors.push("email is not valid")
        }
    }
    
    const validationCheck: ValidationCheck = {
        isValid: (errors.length == 0),
        messages: errors
    }
    return validationCheck
}
