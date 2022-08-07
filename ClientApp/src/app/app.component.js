var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Contacts } from './contacts';
import { DictSubjectUI } from './DictSubjectUI';
import { ContactModel } from './contactModel';
import { Messages } from './messages';
let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.contact = new Contacts();
        this.contactModel = new ContactModel(new Contacts(), new DictSubjectUI(), new Messages());
        this.readFormCheck = true;
    }
    // загрузка данных при старте компонента  
    ngOnInit() {
        /*this.loadContact(); */
        this.loadDictSubjectMessage();
    }
    // получаем данные через сервис
    loadcontactModelOld() {
        this.dataService.getContacts()
            .subscribe((data) => this.contact = data);
    }
    loadContactModel() {
        this.dataService.getContacts()
            .subscribe((data) => this.contactModel = data);
    }
    loadDictSubjectMessage() {
        this.dataService.getDictSubjectMessage()
            .subscribe((data) => this.DictSubjectUI = data);
    }
    createContact() {
        this.contactModel.subject.sublectId = this.subjectMessage;
        this.readFormCheck = false;
        this.dataService.createContact(this.contactModel)
            .subscribe((data) => this.contactModel = data);
    }
    readFormMetod() {
        this.readFormCheck = true;
        this.contactModel = new ContactModel(new Contacts(), new DictSubjectUI(), new Messages());
        /*this.ngOnInit();*/
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        providers: [DataService],
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map