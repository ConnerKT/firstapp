import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


function SelectedBeast(props) {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
// So in this function, we are handling the modal, and with information in our parent, we are setting it to the information that is being passed down
    return <Modal show={show} onHide={handleClose} style={{objectFit:"contain", width: "100", height: "100"}}>
        <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.image} alt="sd" style={{objectFit:"contain", width: "100", height: "100"}}></img>
      
        <p>{props.body}</p>
        </Modal.Body>
        <Modal.Footer>
            {/* This contains buttons to open and close the modal */}
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