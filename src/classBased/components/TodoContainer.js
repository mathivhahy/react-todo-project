import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ],
        idSeq: 4
    };

    handleChange = (id) => {
        this.setState(prevState => {  
            return {
                todos: prevState.todos.map(todo => {
                  if (todo.id === id) {
                    return {
                      ...todo,
                      completed: !todo.completed,
                    }
                  }
                  return todo
                }),
            }
        })
    };

    delTodo = id => {
        this.setState(prevState => {  
            return {
                todos: prevState.todos.filter(todo => {
                  if (todo.id === id) {
                    return false
                  }
                  return true
                }),
            }
        })
    }

    addTodoItem = title => {
        this.setState(prevState => {
            const newTodoItem = {
                id: prevState.idSeq,
                title: title,
                completed: false
            };
            
            return {
                todos: [...this.state.todos, newTodoItem],
                idSeq: prevState.idSeq + 1
            }
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
          todos: this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          }),
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const id_seq = this.state.idSeq
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
          localStorage.setItem("id_seq", id_seq)
        }
      }

    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const id_seq = Number(localStorage.getItem("id_seq"))
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
            todos: loadedTodos,
            idSeq: id_seq
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo 
                    addTodoItemProps={this.addTodoItem}/>
                    <TodosList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.delTodo}
                    setUpdate={this.setUpdate}/>
                </div>
            </div>
        )
    }
}

export default TodoContainer
