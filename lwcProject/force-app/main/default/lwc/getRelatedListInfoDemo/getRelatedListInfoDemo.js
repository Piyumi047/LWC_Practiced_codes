import { LightningElement,wire} from 'lwc';
import  {getRelatedListInfo} from 'lightning/uiRelatedListApi'
export default class GetRelatedListInfoDemo extends LightningElement {
    relatedListData
    @wire(getRelatedListInfo, {
    parentObjectApiName:'Account',// this is an api name of a parent that u get related list for
    relatedListId:'Contacts',
    //reecordypeId:'' //optional
 })listInfoHandler({data,error}){
    if(data){
        console.log(JSON.stringify(data))
        this.relatedListData=data.displayColums
    }
    if(error){
        console.error(error)
    }
 }
}