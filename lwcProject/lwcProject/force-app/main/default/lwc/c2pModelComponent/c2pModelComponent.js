import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeHandler(){
        const myevent= new CustomEvent('close',{
            bubbles:true,
            detail:"Model closed successfully!!"
        })
        this.dispatchEvent(myevent)
    }

    footerHandler(){
        console.log('footer')
    }
}