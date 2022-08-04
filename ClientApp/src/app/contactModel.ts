import { Contacts } from './contacts';
import { DictSubjectMessage } from './dictSubjectMessage';
import { Messages } from './messages';

export class ContactModel {
    constructor(
        public contacts: Contacts,
        public subjectId: string,
        public messages: Messages) { }
}