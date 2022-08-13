import { LightningElement,api} from 'lwc';

export default class P2cSlideComponent extends LightningElement {
    val=10

    changeHanler(event){
        this.val= event.target.value;
    }

    @api resetSlider(){
        this.val=50;
    }
}