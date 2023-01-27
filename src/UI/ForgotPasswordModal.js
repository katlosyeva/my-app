import { Form, Button, Modal, Container, FloatingLabel } from "react-bootstrap";

const ForgotPasswordModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.closeForgotModal}>
      <Modal.Header closeButton>
        <Modal.Title>Відновлення паролю</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Form.Group className="mb-3 mx-3" controlId="formforgotpassword">
        <Form.Label>
          Введіть ваш E-mail. На нього будуть вислані інструкції по відновленю
          паролю.
        </Form.Label>
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Container className="d-flex justify-content-center mx-3 my-3">
        <Button className="px-5" variant="primary">
          Відправити
        </Button>
      </Container>
    </Modal>
  );
};

export default ForgotPasswordModal;
