export default class AddressBook {
    constructor({ id, name, address, phone, city, state, zip }) {
        this.id = id;
        this.name = this.validateName(name);
        this.address = this.validateAddress(address);
        this.phone = this.validatePhone(phone);
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    validateName(n) {
        const regex = /^[A-Z][a-zA-Z ]{2,}$/;
        if (!regex.test(n)) throw "Invalid Name";
        return n;
    }

    validateAddress(a) {
        if (!/^([A-Za-z]{3,})(\s+[A-Za-z]{3,})+/.test(a.trim()))
            throw "Invalid Address";
        return a;
    }

    validatePhone(p) {
        if (!/^(\+\d{12}|\d{12}|\d{10})$/.test(p.trim()))
            throw "Invalid Phone";
        return p;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            address: this.address,
            phone: this.phone,
            city: this.city,
            state: this.state,
            zip: this.zip
        };
    }
}
