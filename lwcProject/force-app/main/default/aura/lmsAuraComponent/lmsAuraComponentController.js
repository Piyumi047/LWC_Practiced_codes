({
    handleMessage : function(component,message) {
        if(message != null && message.getParam("lmsData") != null){
            component.set("v.messageRecived",message.getParam("lmsData").value)
        }
    },
    inputHandler : function(component, event){
        console.log(event.target.value)
        component.set("v.messageValue",event.target.value)
    },
    publishMsg : function(component){
        let msg = component.get("v.messageValue")
        let message ={
            lmsData:{
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message)
    }

})
