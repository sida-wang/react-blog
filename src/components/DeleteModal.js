import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({showModal, setShowModal, onDelete }) => {
    return (
        <Modal
          show = {showModal}
          onHide = {()=> setShowModal(false)}
          aria-labelledby="delete-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Confirm Delete
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Click Delete to confirm
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={onDelete}>
                Delete
            </Button>
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal
