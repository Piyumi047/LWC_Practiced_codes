import { LightningElement,wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { MessageContext,publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue

    @wire(MessageContext)
    context

    msgHandler(event){
        this.inputValue = event.target.value
    }

    publishMsg(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC,message)
    }
}