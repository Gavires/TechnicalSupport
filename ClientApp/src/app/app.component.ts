import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Contacts } from './contacts';
import { DictSubjectUI } from './DictSubjectUI';
import { ContactModel } from './contactModel';
import { Messages } from './messages';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    contact: Contacts = new Contacts();   
    DictSubjectUI: DictSubjectUI[];
    contactModel: ContactModel = new ContactModel(new Contacts(), new DictSubjectUI(), new Messages());
    subjectMessage: string;
    message: string;
    readFormCheck: boolean = true;

    constructor(private dataService: DataService) { }

    // загрузка данных при старте компонента  
    ngOnInit() {
        /*this.loadContact(); */   
        this.loadDictSubjectMessage();
    }
    // получаем данные через сервис
    loadcontactModelOld() {
        this.dataService.getContacts()
            .subscribe((data: Contacts) => this.contact = data);
    }

    loadContactModel() {
        this.dataService.getContacts()
            .subscribe((data: ContactModel) => this.contactModel = data);
    }

    loadDictSubjectMessage() {
        this.dataService.getDictSubjectMessage()
            .subscribe((data: DictSubjectUI[]) => this.DictSubjectUI = data);
    }

    createContact() {
        this.contactModel.subject.sublectId = this.subjectMessage;
        this.readFormCheck = false;
        this.dataService.createContact(this.contactModel)
            .subscribe((data: ContactModel) => this.contactModel = data);
    }

    readFormMetod() {
        this.readFormCheck = true;
        this.contactModel = new ContactModel(new Contacts(), new DictSubjectUI(), new Messages());
        /*this.ngOnInit();*/
    }
}