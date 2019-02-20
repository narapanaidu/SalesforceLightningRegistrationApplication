({
	SubmitButton : function(component,event) {
        // call Apex Function SaveRegistrationDetails on click of Submit button to save data in Registration Form
        // We have to pass regform as paramter
        var RegForm = component.get("v.RegistrationForm");
        //create an action to call the function
        var action = component.get("c.SaveRegistrationDetails");
        //set the parametres for the function
        action.setParams({ regForm : component.get("v.RegistrationForm") });
        //Create a callback that is executed after the server returns the response
        action.setCallback(this,function(response){
            console.log("We are in call back");
            var state = response.getState();
            console.log(state);
            if(state === "SUCCESS"){
                //Alert the User which value returned from the server
                component.set("v.isDatSubmitted",'True');
                //add more logic here
                //save education details as well
                var parentId = response.getReturnValue();
                component.set("v.RegistrationRecordId",parentId);
            }
            else if(state ==="ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log("Error Message: "+ errors[0].message);
                    }
                }
                else{
                    console.log("Unknown error");
                }
            }
        });
        //$A.enqueAction adds the server side action to the queue.
        
        $A.enqueueAction(action);
        
            
		
	}
})
