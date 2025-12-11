export default class AddressBook {
  constructor(obj){
    this._id = obj?.id || Date.now().toString();
    this._name = "";
    this._address = "";
    this._phone = "";
    this._city = "";
    this._state = "";
    this._zip = "";
    if (obj) this.fromObject(obj);
  }

  fromObject(o){
    if(o.name !== undefined) this.name = o.name;
    if(o.address !== undefined) this.address = o.address;
    if(o.phone !== undefined) this.phone = o.phone;
    if(o.city !== undefined) this.city = o.city;
    if(o.state !== undefined) this.state = o.state;
    if(o.zip !== undefined) this.zip = o.zip;
    if(o.id !== undefined) this._id = o.id;
    return this;
  }

  get id(){ return this._id; }

  get name(){ return this._name; }
  set name(v){
    if(!/^[A-Z][a-zA-Z ]{2,}$/.test(v)) throw "Invalid name";
    this._name = v;
  }

  get address(){ return this._address; }
  set address(v){
    if(!/^([A-Za-z]{3,})(\s+[A-Za-z]{3,})+$/.test(v)) throw "Invalid address";
    this._address = v;
  }

  get phone(){ return this._phone; }
  set phone(v){
    if(!/^(\+\d{12}|\d{12}|\d{10})$/.test(v)) throw "Invalid phone";
    this._phone = v;
  }

  get city(){ return this._city; }
  set city(v){ this._city = v; }

  get state(){ return this._state; }
  set state(v){ this._state = v; }

  get zip(){ return this._zip; }
  set zip(v){ this._zip = v; }

  toJSON(){
    return {
      id: this._id,
      name: this._name,
      address: this._address,
      phone: this._phone,
      city: this._city,
      state: this._state,
      zip: this._zip
    };
  }

  toString(){
    return `${this._name} — ${this._city}, ${this._state} (${this._zip}) • ${this._phone}`;
  }
}
