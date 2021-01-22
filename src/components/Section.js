import React, {Component} from "react";
import Input from "../components/Input";
import List from "../components/List"

export default class Section extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            newLoc : "",
            isCreateNew : false
        }
    }

    createNewTodo(name, des, loc){
        this.setState({
            newLoc : {
                name : name,
                des : des,
                loc : loc,
            },
            isCreateNew : true
        })
    }

    componentDidUpdate(){
        if(this.state.isCreateNew === true){
            this.setState({
                isCreateNew : false
            })
        }
    }

    render(){
        return(
            <section className = "todo-app__main">
                <Input createNewTodo = {(name, des, loc)=>this.createNewTodo(name, des, loc)} nowLoc={this.props.nowLoc}/>
                <List isCreateNew = {this.state.isCreateNew} newLoc = {this.state.newLoc} showMode = {this.props.showMode} changeNum_left = {(n)=>this.props.changeNum_left(n)} isClearCompleted = {this.props.isClearCompleted}
                    isDisplayFooter = {this.props.isDisplayFooter} changeIsDisplayFooter = {(s)=>this.props.changeIsDisplayFooter(s)} goToLoc = {(loc)=>this.props.goToLoc(loc)}/>
            </section>
        )
    }
}