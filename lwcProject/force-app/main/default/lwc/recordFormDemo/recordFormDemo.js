import { LightningElement } from 'lwc';
import {showToastEvent} from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import Type_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class RecordFormDemo extends LightningElement {
    objectName= ACCOUNT_OBJECT
    fieldList=[NAME_FIELD,ANNUAL_REVENUE_FIELD,Type_FIELD,INDUSTRY_FIELD]

    successHandler(event){
        console.log(event.detail.id)
        const toastEvent=new showToastEvent({
            title:"Account created",
            message:"Record ID"+ event.target.id,
            variant:"succcess"
        })
        this.dispatchEvent(toastEvent)
    }
}