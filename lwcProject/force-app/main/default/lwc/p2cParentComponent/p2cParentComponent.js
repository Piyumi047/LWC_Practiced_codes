import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[
        {
           src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
           header:"First Card",
           description:"First card description."
            
        },
        {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card",
            description:"second card description."
             
         },
         {
            src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header:"Third Card",
            description:"Third card description."
             
         }
    ]

    precentage=10

    updatevalue(event){
       this.precentage=event.target.value;
    }
}


