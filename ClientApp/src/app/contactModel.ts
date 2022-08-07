import { Contacts } from './contacts';
import { DictSubjectUI } from './DictSubjectUI';
import { Messages } from './messages';

export class ContactModel {
    constructor(
        public contacts: Contacts,
        public subject: DictSubjectUI,
        public messages: Messages) { }
}