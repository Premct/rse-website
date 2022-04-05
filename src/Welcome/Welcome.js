import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

import './Welcome.css'

function Welcome() {
    return (
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col lg={10} >
                        <Card bg="light" id="cont">
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
                    </Col>
                </Row>
            </Container>
    );

}

export default Welcome

