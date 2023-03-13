import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';

function TodoForm({addTodo}){
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail" onSubmit={handleSubmit}>
                <Form.Control   className="me-1" 
                                placeholder="Search or create todo"
                                value={value}
                                onChange={(e) => setValue(e.target.value)} />
                <Button variant="primary"  type="submit">
                    <FontAwesomeIcon icon={ faPlus } />
                </Button>
            </Form.Group>
        </Form>
    )
}

export default TodoForm;