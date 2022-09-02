import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateObjectPage extends NavigationMixin(LightningElement) {
    navToObjectPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                //open new create contact page
                actionName:'new'
            }
        })
    }

    navToObjectPagewithDefaultValues(){
        const defaultValue= encodeDefaultFieldValues({
            FirstName:'Dulanjali',
            LastName:'GWP',
            LeadSource:'other',
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                //open new create contact page
                actionName:'new'
            },
            state:{
                defaultFieldValues: defaultValue
            }
        })
    }

    navToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                //open new create contact page
                actionName:'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

    navToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                //open new create contact page
                actionName:'home'
            }
        })
    }
}