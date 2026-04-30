import type { IUserImpl } from "./IUserImpl.js";

export class UserImpl implements IUserImpl {

    public createUser(): void {
        console.log('User created');
    }

    public deleteUser(): void {
        console.log('User deleted');
    }

    public updateUser(): void {
        console.log('User updated');
    }

    public getUser(): void {
        console.log('User retrieved');
    }   
};
