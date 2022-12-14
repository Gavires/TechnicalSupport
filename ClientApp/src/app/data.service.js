var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.errorMessage = "";
        this.url = "/api/contacts";
    }
    getContacts() {
        return this.http.get(this.url);
    }
    getContact(id) {
        return this.http.get(this.url + '/' + id);
    }
    getDictSubjectMessage() {
        return this.http.get(this.url + '/' + "getDictSubjectMessage");
    }
    getErrorLog() {
        return this.http.get(this.url + '/' + "Log");
    }
    createContact(contactsModel) {
        return this.http.post(this.url, contactsModel);
    }
    updateContact(contacts) {
        return this.http.put(this.url, contacts);
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map