import { useState } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid'
import EditTodoForm from './EditTodoForm';
uuidv4();

function TodoWrapper(){
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        if(todo !== ""){
            setTodos([...todos, {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false
            }]);
        }
    }

    const toggleComplate = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, completed: !todo.completed} : todo)
        )
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, task, isEditing: !todo.isEditing} : todo))
    }
    return(
        <div>
            <TodoForm addTodo={addTodo}/>
            <div className='todos-container'>
                {todos.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm key={index} editTodo={editTask} task={todo} />
                    ) : (
                        <Todo task={todo}
                            key={index}
                            toggleComplate={toggleComplate}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo} />
                    )
                ))}
            </div>
        </div>
    )
}

export default TodoWrapper;