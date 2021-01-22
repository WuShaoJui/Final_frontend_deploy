import React, {Component} from "react";
import { Input, Button } from 'antd';

const { TextArea } = Input;

export default class InputBar extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: "",
            inputValue : ""
        }
    }
    handleInput(e){
        this.setState({
            inputValue : e.target.value
        })
    }
    handleNameInput(e){
        this.setState({
            name : e.target.value
        })
    }

    /*handleEnter(e){
        if(e.key === "Enter"){
            console.log(this.state.inputValue)
            this.setState({
                inputValue : this.state.inputValue + "\n"
            })
        }
    }*/
    handleSave(e){
        if(this.state.inputValue !== "" && this.state.name !== "" ){
            this.props.createNewTodo( this.state.name, this.state.inputValue ,this.props.nowLoc )
            this.setState({
                inputValue : "",
                name : ""
            })
        }
    }
    render(){
        return (
            <>
                <div className = "location">
                    緯度:{this.props.nowLoc.lat + "\n"}
                    經度:{this.props.nowLoc.lng}
                </div>
                <Input placeholder = "Name" className = "nameInput" onChange = {(e)=>{this.handleNameInput(e)}} value = {this.state.name}/>
                <TextArea rows={4} placeholder = "Type something..." autoSize={true} className = "todo-app__input" 
                onChange = {(e)=>{this.handleInput(e)}} value = {this.state.inputValue}/>
                <div className="saveButton">
                    <Button type="primary" onClick = {(e)=> this.handleSave(e)}>Save</Button>
                </div>
                
            </>
        )
    }
    
};