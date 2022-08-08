import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';
import { ContactModel } from './contactModel';

@Injectable()
export class DataService {

    errorMessage: String = "";
    private url = "/api/contacts";

    constructor(private http: HttpClient) { }

    getContacts() {
        return this.http.get(this.url);
    }

    getContact(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    getDictSubjectMessage() {
        return this.http.get(this.url + '/' + "getDictSubjectMessage");
    }

    getErrorLog() {
        return this.http.get(this.url + '/' + "Log");
    }

    createContact(contactsModel: ContactModel) {
        return this.http.post(this.url, contactsModel);
    }

    updateContact(contacts: Contacts) {
        return this.http.put(this.url, contacts);
    }
}