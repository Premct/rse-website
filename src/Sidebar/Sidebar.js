import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Row, Col, Offcanvas } from 'react-bootstrap'

function Sidebar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button onClick={handleShow}>Open Menu</Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Quick Jumper</Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    );
}

export default Sidebar
