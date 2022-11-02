import React from "react";

function TextBoxUI(props){
    const taskmsg = props.taskname;
    return (
        <>
        {taskmsg.length > 2 &&
         <label>
        <input type="checkbox" />
        {props.taskname}
      </label>
}

        </>
       
    )

}
 
export default TextBoxUI