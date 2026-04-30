import type { IUserImpl } from "./IUserImpl.js";

export class UserImplProxy implements IUserImpl {

    private userImpl: IUserImpl;

    constructor(userImpl: IUserImpl) {
        this.userImpl = userImpl;
    }

    public createUser(): void {
        console.log('Proxy: Before creating user');
        this.userImpl.createUser();
        console.log('Proxy: After creating user');
    }

    public deleteUser(): void {
        console.log('Proxy: Before deleting user');
        this.userImpl.deleteUser();
        console.log('Proxy: After deleting user');
    }

    public updateUser(): void {
        console.log('Proxy: Before updating user');
        this.userImpl.updateUser();
        console.log('Proxy: After updating user');
    }

    public getUser(): void {
        console.log('Proxy: Before retrieving user');
        this.userImpl.getUser();
        console.log('Proxy: After retrieving user');
    }   
};
