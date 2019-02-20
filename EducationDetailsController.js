({
    doinit:function(component,event,helper){
        
        console.log("This text is from init method defined in the child component");
        //component.set("v.InstitutionName","SSN college of Engineering");
        //component.set("v.CourseName","Engineering");
        //component.set("v.DurationofCourse","4");
        //component.get("v.EducationDetailsListInnerComponent").push(component.get("v.EduDetails"));
    
      
        helper.helperRectifysequence(component,event);
        
    },
	deleteDetails : function(component, event, helper) {
        var NewEducationdetailList = component.get("v.EducationDetailsListInnerComponent");
        var currentIndex = component.get("v.indexNo");
       // alert(JSON.stringify(NewEducationdetailList));
        console.log(currentIndex);
        if(currentIndex > -1)
        {
            NewEducationdetailList.splice(currentIndex,1);
        }
        component.set("v.EducationDetailsListInnerComponent", NewEducationdetailList);
		
	},
    
    changeIndex : function(component,event,helper){
        console.log("There is a change noticed in the index attribute");
        helper.helperRectifysequence(component,event);
    },
    
    saveEduDetails: function(component,event,helper){
        //call Apex Class function with name SaveEducationalDetails
        helper.SavingEducationDetails(component,event);
    }
    
    
})
