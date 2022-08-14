import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('Child Constructor')
    }

    connectedCallback(){
        console.log('Child  Connected Call back')
    }

    renderedCallback(){
        console.log('Child  Rendered Call back')
    }
}