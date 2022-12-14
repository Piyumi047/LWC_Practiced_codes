import { LightningElement } from 'lwc';

export default class Animal extends LightningElement {
    name = "Cat";
    originalAge = 1;
    newAge = 0;
    
    get age(){
        return this.originalAge;
    }

    set age(value){
        if(value>20){
            throw new Error('Invalid age for a cat');
        }
        this.originalAge=value;
    }

    updateAge(event){
        this.newAge=event.target.value;
        console.log(this.newAge);
    }

    updateOriginalAge(event){
        this.age=this.newAge;
    }
}