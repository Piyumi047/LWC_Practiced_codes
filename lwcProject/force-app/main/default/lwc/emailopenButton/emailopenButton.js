import { LightningElement} from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class EmailopenButton extends NavigationMixin(LightningElement) {
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard_navItemPage',
            attributes:{
                apiName:'LWC_Practice'
            },
        });
    }
   
}