({
	doSubmit : function(component, event, helper) {
        //calling helper function for submission
        helper.SubmitButton(component,event);  
	},
    
    
    addDetails:function(cmp,event,helper){
        console.log("Add Education Details");
        var currentEducationDetailList = cmp.get("v.AddEducationDetailsList");
        var currentsize= parseInt((currentEducationDetailList.length));
        var Newsize = parseInt((currentsize)+1);
        currentEducationDetailList.push(Newsize);
        cmp.set("v.AddEducationDetailsList",currentEducationDetailList);
        
    }
})
