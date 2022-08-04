import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Contacts } from './contacts';
import { DictSubjectMessage } from './dictSubjectMessage';
import { ContactModel } from './contactModel';
import { Messages } from './messages';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    contact: Contacts = new Contacts();   // изменяемый товар
    newContact: Contacts = new Contacts();   // изменяемый товар
    /*dictSubjectMessage: DictSubjectMessage[] = [{ Subject: "Техподдержка" }, { Subject: "Менеджер" }, { Subject: "Менеджер" }];                // массив товаров*/
    dictSubjectMessage: DictSubjectMessage[];
    /*subjectMessage: DictSubjectMessage = new DictSubjectMessage();*/
    subjectMessage: string;
    contactModel: ContactModel = new ContactModel(new Contacts(), "", new Messages());
    message: string;
    /*num: bigint = 100n;*/
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadContact();    // загрузка данных при старте компонента  
        this.loadDictSubjectMessage();
    }
    // получаем данные через сервис
    loadContact() {
        this.dataService.getContacts()
            .subscribe((data: Contacts) => this.contact = data);
    }

    loadDictSubjectMessage() {
        this.dataService.getDictSubjectMessage()
            .subscribe((data: DictSubjectMessage[]) => this.dictSubjectMessage = data);
    }

    createContact(contactModel: ContactModel, subjectId: string) {
        this.contactModel.subjectId = subjectId;
        this.dataService.createContact(this.contactModel)
            .subscribe();
    }
    // сохранение данных
    //save() {
    //    if (this.contact.id == null) {
    //        this.dataService.createContact(this.contact)
    //            .subscribe((data: Contacts) => this.contacts.push(data));
    //    } else {
    //        this.dataService.updateContact(this.contact)
    //            .subscribe(data => this.loadProducts());
    //    }
    //}
}