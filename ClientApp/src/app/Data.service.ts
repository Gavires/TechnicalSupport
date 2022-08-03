import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from './contacts';

@Injectable()
export class DataService {

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

    createContact(contacts: Contacts) {
        return this.http.post(this.url, contacts);
    }

    updateContact(contacts: Contacts) {
        return this.http.put(this.url, contacts);
    }
}