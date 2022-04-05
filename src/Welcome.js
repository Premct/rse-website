import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap'

function Welcome() {
    return (
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '50vw', display: 'flex' }} bg="light">
            <Card.Img src="./campus-pau.png" />
                <Card.Body>
                    <Card.Title>Welcome !</Card.Title>
                    <Card.Text>Bienvenue sur notre site ! Découvrez ici le plan d'action que nous, experts RSE avons mis en place pour CYTech afin de promouvoir ce mouvement au sein de l'école.
                    </Card.Text>

                    <a href="#action-plan">
                        <Button variant="success" style={{ width: '150px' }}>Let's go!</Button>
                    </a>
                </Card.Body>

            </Card>
            </Container>
    );

}

export default Welcome

