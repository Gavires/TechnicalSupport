import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Contacts } from './contacts';
import { DictSubjectMessage } from './dictSubjectMessage';
import { ContactModel } from './contactModel';
import { Messages } from './messages';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    contact: Contacts = new Contacts();   
    dictSubjectMessage: DictSubjectMessage[];
    contactModel: ContactModel = new ContactModel(new Contacts(), "", new Messages());
    subjectMessage: string;
    message: string;

    constructor(private dataService: DataService) { }

    // загрузка данных при старте компонента  
    ngOnInit() {
        this.loadContact();    
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

    createContact(subjectId: string) {
        this.contactModel.subjectId = subjectId;
        this.dataService.createContact(this.contactModel)
            .subscribe();
    }
}