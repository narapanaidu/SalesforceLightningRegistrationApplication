({
	OpenorCloseRegistrationForm : function(component, event, helper) {
        var labelofButton = event.getSource().get("v.label");
        if(labelofButton =="Open Registration Form"){
            component.set("v.OpenRegistrationForm",true);
            component.set("v.ButtonLabel","Close the Registration Form")
        }
        
        if(labelofButton =="Close the Registration Form"){
            component.set("v.OpenRegistrationForm",false);
            component.set("v.ButtonLabel","Open Registration Form")
        }
		
	}
})
