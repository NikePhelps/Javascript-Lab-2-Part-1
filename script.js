"use strict";

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add() {
       let name = prompt("name");
       let email = prompt("email");
       let phone = prompt("phone");
       let relation = prompt("relation");
       let info = new Contacts (name, email, phone, relation);
       this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
                break;
            }
        }
    }
    print() {
        console.log(this.contacts);
    };
}

class Contacts {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }

}


const phoneBook = new AddressBook();
while (true) {
    let actionPrompt = prompt("Do you want to add, delete, print, or quit?");
    if (actionPrompt === "add") {
        phoneBook.add();
    }
    if (actionPrompt === "delete") {
        let actionPrompt1 = prompt("Do you want to delete by index or name?")
        if (actionPrompt1 === "index") {
        let index = prompt("What index do you want to delete?");
        phoneBook.deleteAt(index);
        } if (actionPrompt1 === "name") {
            let name = prompt("What name do you want to delete?")
            phoneBook.deleteByName(name);
        }
    }
    if (actionPrompt === "print") {
        phoneBook.print();
    }
    if (actionPrompt === "quit") {
        console.log("See ya later");
        break;
    }
}