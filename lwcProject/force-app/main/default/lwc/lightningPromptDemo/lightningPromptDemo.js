import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt'
import LightningAlert from 'lightning/alert'
export default class LightningPromptDemo extends LightningElement {
    // async promptHandler(){
    //    const result=await LightningPrompt.open({
    //     message:"Please Ener Your Age"
    //    })
    //    console.log(result)
    // }

     promptHandler(){
        const result=LightningPrompt.open({
         message:"Please Ener Your Age",
         label:"Check your voting eligibility",
         tehem:"success",
         defaultValue:30
        }).then(result=>{
            console.log(result)
            if(result && Number(result)>18){
               // console.log("Hurray you are eligible")
                this.alertHandler("Hurray you are eligible","Success","success")
            }else{
               // console.log("Sorry you are not eligible")
                this.alertHandler("Sorry you are not eligible","Error","error")
            }
        })
        
     }

     alertHandler(message, label,theme){
        LightningAlert.open(
            {
                message:message,
                label:label,
                theme:theme
            }
        )
     }
}