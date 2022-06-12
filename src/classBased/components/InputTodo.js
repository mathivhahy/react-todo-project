import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    } 

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoItemProps(this.state.title)
            this.setState({
              title: "",
            })
          } else {
            alert("Please write item")
          }
    }

    render() {
        return (
            <form 
            className="form-container"
            onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                className="input-text"
                placeholder="Add Todo..."
                value={this.state.title}
                name="title"
                onChange={this.handleChange}/>
                <button 
                className="input-submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default InputTodo
