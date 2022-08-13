({
    handleMsg : function(component, event) {
         var element=event.getParam("msg");
         component.set("v.message", element)
    }
})
