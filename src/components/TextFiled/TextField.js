import "./TextField.css"
/*Boostrap */
import Form from 'react-bootstrap/Form';

export default function TextField({ type, placeholder, onChange, id }) {
    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{placeholder}</Form.Label>
                <Form.Control type={type} placeholder={placeholder} />
            </Form.Group>
        </>
    )
}
