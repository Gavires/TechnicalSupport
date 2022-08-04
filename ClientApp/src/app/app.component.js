var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Contacts } from './contacts';
import { ContactModel } from './contactModel';
import { Messages } from './messages';
let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.contact = new Contacts(); // изменяемый товар
        this.newContact = new Contacts(); // изменяемый товар
        this.contactModel = new ContactModel(new Contacts(), "", new Messages());
        /*num: bigint = 100n;*/
        this.tableMode = true; // табличный режим
    }
    ngOnInit() {
        this.loadContact(); // загрузка данных при старте компонента  
        this.loadDictSubjectMessage();
    }
    // получаем данные через сервис
    loadContact() {
        this.dataService.getContacts()
            .subscribe((data) => this.contact = data);
    }
    loadDictSubjectMessage() {
        this.dataService.getDictSubjectMessage()
            .subscribe((data) => this.dictSubjectMessage = data);
    }
    createContact(contactModel, subjectId) {
        this.contactModel.subjectId = subjectId;
        this.dataService.createContact(this.contactModel)
            .subscribe();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        providers: [DataService]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map