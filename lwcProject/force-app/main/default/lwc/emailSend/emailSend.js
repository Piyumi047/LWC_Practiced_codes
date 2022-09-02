import { LightningElement } from 'lwc';
import EMAIL_OBJ from '@salesforce/schema/ListEmail'
import EMAIL_RECIPIENT_SOURCE_OBJ from '@salesforce/schema/ListEmailRecipientSource'
//import EMAIL_INDIVIDUAL_RECIPIENT from 'ListEmailIndividualRecipient'
import EMAILBOX from '@salesforce/schema/ListEmail.Subject'
import STATUS_OBJ from '@salesforce/schema/ListEmail.Status'
import Name from '@salesforce/schema/ListEmailRecipientSource.Name'

export default class EmailSend extends LightningElement {
    objectName=EMAIL_OBJ
    fields=[EMAILBOX,Name,STATUS_OBJ]
}