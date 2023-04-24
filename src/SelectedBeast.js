import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


function SelectedBeast(props) {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <Modal show={show} onHide={handleClose} style={{objectFit:"contain", width: "100", height: "100"}}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.image} alt="sd" width="500" height="300"></img>
      
        {props.body}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
}

export default SelectedBeast;