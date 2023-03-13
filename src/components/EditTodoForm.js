import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <form className='Todo w-100 d-flex justify-content-between align-items-center' onSubmit={handleSubmit}>
            <input className="form-control" type="text"  value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </form>
    )
}

export default EditTodoForm;