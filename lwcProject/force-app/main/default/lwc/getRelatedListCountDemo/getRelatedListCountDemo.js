import { LightningElement,wire} from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';
export default class GetRelatedListCountDemo extends LightningElement {
    relatedData
   
    @wire(getRelatedListCount,{
    parentRecordId:'0012z00000BknBrAAJ',//The Id of the parent that you want to get related lit for
    relatedListId:'Contacts'
   })listCountHandler({error,data}){
    if(data){
        console.log(JSON.stringify(data));
        this.relatedData=data
    }
    if(error){
        console.log(error);
    }
   }
}