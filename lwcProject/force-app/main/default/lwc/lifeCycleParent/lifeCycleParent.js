import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log('Parent Constructor')
    }

    connectedCallback(){
        console.log('Parent Connected Call back')
    }

    renderedCallback(){
        console.log('Parent Rendered Call back')
    }

     name
    changeName(event){
        this.name=event.target.value
    }
}
