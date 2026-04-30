import { UserImpl } from "./classes/UserImpl.js";
import { UserImplProxy } from "./classes/UserImplProxy.js";

const userService = new UserImplProxy(new UserImpl());

userService.createUser();
// Output:
// Proxy: Before creating user
// User created
// Proxy: After creating user

userService.getUser();
// Output:
// Proxy: Before retrieving user
// User retrieved
// Proxy: After retrieving user

userService.updateUser();
// Output:
// Proxy: Before updating user
// User updated
// Proxy: After updating user

userService.deleteUser();
// Output:
// Proxy: Before deleting user
// User deleted
// Proxy: After deleting user
