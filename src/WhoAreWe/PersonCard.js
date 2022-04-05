import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap'

function PersonCard(props) {
    return(
        <Card style={{ width: '200px' }}>
            <Card.Img src={ props.img }/>

            <Card.Body>
                <Card.Title>{ props.name }</Card.Title>
                <Card.Subtitle className="text-muted">{ props.lastname }</Card.Subtitle>
                <Card.Text>{props.shortDescription}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PersonCard
