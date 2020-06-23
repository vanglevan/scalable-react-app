class User {
  constructor(id, name, userName, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.address = Address.setAddress(address);
    this.phone = phone;
    this.website = website;
    this.company = Company.setCompany(company);
  }

  static setUser(user) {
    return new User(
      user.id,
      user.name,
      user.username,
      user.email,
      user.address,
      user.phone,
      user.website,
      user.company,
    );
  }

  static mappingUsers(users) {
    return users.map(user => this.setUser(user));
  }
}

class Address {
  constructor(street, suite, city, zipcode, geo) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
  }

  static setAddress(address) {
    return new Address(
      address.street,
      address.suite,
      address.city,
      address.zipcode,
      address.geo,
    );
  }
}

class Company {
  constructor(name, catchPhrase, bs) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }

  static setCompany(company) {
    return new Company(company.name, company.catchPhrase, company.bs);
  }
}

export { User, Address, Company };
