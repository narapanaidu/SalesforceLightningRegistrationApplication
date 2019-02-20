({
	helperRectifysequence : function(component,event) {
        var indexNo = component.get("v.indexNo");
        var sequenceNo = parseInt(indexNo)+1;
        component.set("v.sequenceNo",sequenceNo);
        
		
	},
    
    SavingEducationDetails :function(component,event){
        //linking the parent object Id to the Child
        var RegistrationRecordId = component.get("v.RegistrationRecordId");
        component.set("v.EduDetails.Registration_Form__c",RegistrationRecordId);
        var EducationDetails = component.get("v.EduDetails");
        var action = component.get("c.SaveEducationalDetails");
        action.setParams({ eduDetails : EducationDetails});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state==="SUCCESS")
            {
                alert("Education Form Id "+ response.getReturnValue());
            }
            else if(state==="Error")
            {
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
        $A.enqueueAction(action);
    }
})
