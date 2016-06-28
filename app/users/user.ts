export class Address {
    street: string = "";
    city: string = "";
    state: string = "";
    zipcode: string = "";    
}

export class User {
    name: string = "";
    email: string = "";
    phone: string = ""; 
    address = new Address();
}