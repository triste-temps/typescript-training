"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// let's create an instance
let myCustomer = new Customer("Martin", "Matin");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
