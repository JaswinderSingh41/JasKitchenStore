import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"jaswinder@gmail.com",
            password:"jasi1234"
        },
        {
            email:"jas@gmail.com",
            password:"pass1234"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}