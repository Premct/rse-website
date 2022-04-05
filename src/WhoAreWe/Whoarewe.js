import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

import PersonCard from './PersonCard'

function Whoarewe() {
    return(
        <>
        <div>
            <h1>l'Équipe</h1>
        </div>

        <Container>
            <Row xs={3} lg={5}className="g-4" style={{ display: 'flex', justifyContent: 'center'}}                                             >
                <Col>
                    <PersonCard name="" lastname="" shortDescription="ING2-GSI2" img="CY_Tech.png"/>
                </Col>
                <Col>
                    <PersonCard name="" lastname="" shortDescription="ING2-GSI2" img="CY_Tech.png"/>
                </Col>
                <Col>
                    <PersonCard name="" lastname="" shortDescription="ING2-GSI2" img="CY_Tech.png"/>
                </Col>
                <Col>
                    <PersonCard name="" lastname="" shortDescription="ING2-GSI2" img="CY_Tech.png"/>
                </Col>
                <Col>
                    <PersonCard name="" lastname="" shortDescription="ING2-GSI2" img="CY_Tech.png"/>
                </Col>
            </Row>
        </Container>

        </>
    );
}

export default Whoarewe
