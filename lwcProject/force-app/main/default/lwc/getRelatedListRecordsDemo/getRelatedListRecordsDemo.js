import { LightningElement,wire} from 'lwc';
import {getRelatedListRecords} from 'lightning/uiRelatedListApi'
export default class GetRelatedListRecordsDemo extends LightningElement {
    recordList
    @wire(getRelatedListRecords, {
        parentRecordId:'0012z00000BknBrAAJ',
        relatedListId:'Contacts',
        fields:['Contact.Name', 'Contact.Id'] //optional field
      })listRecordsHandler({data,error}){
        if(data){
          console.log(JSON.stringify(data))
          this.recordList = data.records
        }
        if(error){
          console.error(error)
        }
      }
}