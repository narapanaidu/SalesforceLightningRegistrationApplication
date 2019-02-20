<aura:component controller ="SaveRegistrationFormDetails" implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction" access="global" >
	
    <!--Attributes-->
    
    <aura:attribute type="String"   name = "InstitutionName" />
    
    <aura:attribute type="String" name="CourseName"    default=""/>
    
    <aura:attribute type="String" name="DurationofCourse" default=""/>
    
    <aura:attribute type="String[]" name="NoofHoursofStudy" default=", Less than 35%, In between 35% and 65%, In between 65% and 80%, Above 80%"/>
    
    <aura:attribute type="String" name="OverAllScore" default=""/>
    
    <aura:attribute type="String" name="PageSubheading" default="Your Educational Detail"/>
    
    <aura:attribute type="List" name="EducationDetailsListInnerComponent" />
    
    <aura:attribute type="Integer" name="indexNo" />
    
    <aura:attribute type="Integer" name="sequenceNo" />
    
    <aura:attribute type="Educational_Detail__c" name ="EduDetails" default="{'sobjectType':'Educational_Detail__c'}"/>
    
    <aura:attribute type="String" name="RegistrationRecordId"/>
	    
    
    <!--Aura Handlers-->
    
    <aura:handler name="init" value="{!this}" action ="{!c.doinit}"/>
    
    <aura:handler name="change" value="{!v.indexNo}" action="{!c.changeIndex}"/>
    
    <aura:handler name ="change" value="{!v.RegistrationRecordId}" action="{!c.saveEduDetails}"/>
	    
    
    <!--Starting of the Component-->
    
    <div class="slds-m-top_xx-large">
         <div class="slds-page-header">
              <div class="slds-align_absolute-center">
                  <div class="slds-text-heading_small">
                      
                      {!v.indexNo} - {!v.PageSubheading} - {!v.sequenceNo}
                      
                 </div>
             </div>
        </div>
    </div>
    
    <br/>
			  
    
    <!--TextBoxes for Inputting details-->
    
    <lightning:input label="Enter your Institute Name" name="InstituteName" value="{!v.EduDetails.Name}"/>
    
    <br/>
    
    <lightning:input label="Enter your Course Name" name="CourseName" value="{!v.EduDetails.Course_Name__c}"/>
    
    <br/>
    
    <lightning:input label="Enter your Course Duration(in years)" name="CourseName" value="{!v.EduDetails.Course_Duration__c}"/>
    
    <br/>
	    
    
    <!--Selection drop down using iteration-->
    
    <lightning:select label ="What is your overall score in the course?" 
                      name="Overall Score" 
                      value="{v.EduDetails.Overall_Score__c}">
    <aura:iteration items="{!v.NoofHoursofStudy}" var="hrs">
            <option value="{!hrs}" text="{!hrs}"/>
     </aura:iteration>
    </lightning:select>
    
    <br/>
		    
    
    <!--button to delete the education Details-->
    
    <lightning:button iconName="utility:delete" variant="border-filled" label="Delete this education details" onclick="{!c.deleteDetails}">
    </lightning:button>
    <br/>
    
    
    
    
</aura:component>
