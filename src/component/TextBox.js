import React from "react";
import TextBoxUI from "./TextBoxUI";

class TextBox extends React.Component{

    constructor(){
        super()
        this.state={
            taskname:'',
            clicked:false
        }
    }

    taskHander=(event)=>{

        this.setState({taskname:event.target.value});
        //console.log(this.state)

    }
    clickStatus=(event)=>{
        this.setState({clicked:true})
    }


    render(){
        return(
            <React.Fragment>
            <div className="Box">
                <input type='Text' onChange={this.taskHander}></input>
                <button type='submit' onClick={this.clickStatus} >submit</button>
                {this.state.clicked &&
                
                <TextBoxUI taskname={this.state.taskname}/>
    }
            </div>
            </React.Fragment>
        )
        

    }
}
export default TextBox