<aura:application extends="force:slds" >

    <!--Attributes-->
    <aura:attribute type="Boolean" name="OpenRegistrationForm" default="false"/>
    <aura:attribute type="String" name="ButtonLabel" default="Open Registration Form"/>
    
    <!--Button-->
    <div class="slds-m-top_large">
    <div class="slds-align_absolute-center">
    <lightning:button variant="brand" label="{!v.ButtonLabel}" onclick="{!c.OpenorCloseRegistrationForm}"/>
    </div>
    </div>
    
    <!--Aura if-->
    <aura:if isTrue="{!v.OpenRegistrationForm}">
               <c:Registration_Component/>
    </aura:if>
    
</aura:application>
