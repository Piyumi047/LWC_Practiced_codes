import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwchtml extends NavigationMixin(LightningElement) {
    navToLWC(){

        var definition={
            componentDef:'c:navigationLWCtarget',
            attributes:{
                recordId:'ASD123445fg'
            }
        }
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.apps'+btoa(JSON.stringify(definition))
            }
        })
    }
}