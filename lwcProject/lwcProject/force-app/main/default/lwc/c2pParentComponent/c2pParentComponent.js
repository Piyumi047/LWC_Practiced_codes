import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModel=false
    msg
    clickHandler(){
        this.showModel=true
    }

    closeModel(event){
        this.msg=event.detail
        this.showModel=false
    }
}