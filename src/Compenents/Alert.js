import React from "react";

export default function Alert(props) {



  return (
    // Initially props.alert has null value, so if it has null then return false i.e (false && <> this implies tru)e==> false.
   (
   <div style={{height:'60px'}}>
{    props.alert &&   
          <div 
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type}</strong> {props.alert.msg}
           
          </div>}
          </div>
        
      

      
    )
  );
}
