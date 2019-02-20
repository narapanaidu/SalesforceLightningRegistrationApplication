({
    //this method is called at t=0; when the component is created
    render: function(component,helper){
        //Call Base Render method
        var a = this.superRender();
        //Custom Rendering
        console.log("This text is from Render function when component gets initiated");
        return a;
    },
    
    //this method is called at t= &t; after the render function is executed
    afterRender:function(component,helper){
        //Call Base After Render Method
        this.superAfterRender();
        //Custom After Rendering
        console.log("This text should come after render() is over");
        console.log("This text is from after render");
    },
    
    //this method is called when ever there is a change in data to DOM elements
    rerender:function(component,helper){
        //Call Base rerender Method
        this.superRerender();
        //Custom Rerendering
        console.log("This text is from rerender fucntion.. Whenever any data change occurs");
    },
    
    //this method is called when the component get destroyed (i.e; not deleted )
    unrender:function(component,helper){
        //call Base Unrender Method
        this.superUnrender();
        //custom unrendering
        console.log("This text appears when Registration Component is destroyed");
        
    }
})
