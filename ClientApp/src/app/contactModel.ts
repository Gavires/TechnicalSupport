import { Contacts } from './contacts';
import { Messages } from './messages';

export class ContactModel {
    constructor(
        public contacts: Contacts,
        public subjectId: string,
        public messages: Messages) { }
}