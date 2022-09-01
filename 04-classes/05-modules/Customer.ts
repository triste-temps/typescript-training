
export class Customer {

    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(): string{
        return this._firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public set lastName(value: string){
        this._lastName = value;
    }
}

// let's create an instance
let myCustomer = new Customer("Martin", "Matin");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName); 