import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToRecordPage extends NavigationMixin (LightningElement) {
    navToViewRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030C00000TDwr1QAD',
                objectApiName:'Contact',
                //open new create contact page
                actionName:'view'
            }
        })
    }

    navToEditRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0030C00000TDwr1QAD',
                objectApiName:'Contact',
                //open new create contact page
                actionName:'edit'
            }
        })
    }
}