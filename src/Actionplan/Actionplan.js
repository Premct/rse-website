import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap'

function Actionplan(props) {
    return(
        <div id={ props.id }>
            <h1>{ props.title }</h1>
        </div>

    );
}

export default Actionplan;
