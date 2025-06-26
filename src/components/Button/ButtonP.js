import "./ButtonP.css"
import Button from 'react-bootstrap/Button';

export default function ButtonP({ text, onClick }) {
    return (

        <Button id="btnP" variant="primary">{text}</Button>
    )
}
