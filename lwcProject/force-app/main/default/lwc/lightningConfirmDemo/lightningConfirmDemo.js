import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'
export default class LightningConfirmDemo extends LightningElement {
    async confirmHandler(){
        const result= await LightningConfirm.open({
            message:"Would you like to refresh the page",
            label:"Are you sure?",
            //varient:"headerless",
            theme:"success"
        })
        //on click of ok result will be true else false
        if(result){
            location.reload()
        }
    }
}