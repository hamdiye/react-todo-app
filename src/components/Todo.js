import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function Todo({task, toggleComplate, deleteTodo, editTodo}){
    return(
        <div className='Todo w-100 d-flex justify-content-between align-items-center'>
            <p  onClick={() => toggleComplate(task.id)} 
                className={`${task.complated ? `text-decoration-line-through align-items-start d-flex flex-column` : "align-items-start d-flex flex-column"}`}>
                {/* <span className='title h5'>bu yeni bir task</span> */}
                <span>{task.task}</span> 
            </p>

            <span>
                <FontAwesomeIcon className="me-3" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
            </span>
        </div>
    )
}

export default Todo