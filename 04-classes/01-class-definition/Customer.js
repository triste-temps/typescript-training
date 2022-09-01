var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// créer customer
var myCustomer = new Customer("Martin", "Matin");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
