import { LightningElement } from 'lwc';
import LightningAlert from'lightning/alert'
export default class LightningAlertDemo extends LightningElement {
    async aletHandler(event){
        const {name}=event.target
        //window.alert("Hello") // earlier we were using this
        await LightningAlert.open({
            message:"This is a alert",
            varient:"headerless",
            label:"Iam Alert Header",
            theme:name
        }).then(result=>{
            console.log("result", result)
            let x=2
            let y=3
            this.add(x,y)
        })

        
    }

   

    add(a,b){
        console.log(a+b)
    }
}