import { LightningElement,api} from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title

    handleMsg(){
        const event=new CustomEvent('sendmsg',{
            detail:{
                "msg":"Hello this messge pass from lwc using button click"
            }
        })
        this.dispatchEvent(event)
    }
}