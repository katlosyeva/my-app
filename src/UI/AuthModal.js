import { Form, Button, Modal, Container, FloatingLabel } from "react-bootstrap";

const AuthModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Авторизація</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">E-mail</Form.Label>
          <Form.Control type="e-mail" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="">Пароль</Form.Label>
          <Form.Control type="password" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group> */}

        <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="floatingPassword"
          label="Пароль"
        >
          <Form.Control type="password" placeholder="Пароль" />
        </FloatingLabel>
        <Container>
          <a className="pe-1" onClick={props.openForgotModal}>
            Забули пароль?
          </a>
        </Container>

        <Container className="d-flex justify-content-center mx-3 my-3">
          <Button className="px-5" variant="primary">
            Увійти
          </Button>
        </Container>
      </Modal.Body>
      <Container className="d-flex justify-content-center mx-3">
        <p className="px-1">Новий користувач?</p>
        <a
          type="button"
          onClick={props.openRegistrationAndClosingAuthModal}
          className="px-1"
        >
          Зареєструйтесь
        </a>
      </Container>
    </Modal>

    // <div
    //   className="modal show"
    //   style={{ display: "block", position: "initial" }}
    // >
    //   <Modal.Dialog>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Авторизація</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label className="">E-mail</Form.Label>
    //         <Form.Control type="e-mail" />
    //         <Form.Text className="text-muted"></Form.Text>
    //       </Form.Group>
    //       <Form.Group>
    //         <Form.Label className="">Пароль</Form.Label>
    //         {/* <Form.Dialog></Form.Dialog> */}
    //       </Form.Group>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary">Close</Button>
    //       <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
  );
};

export default AuthModal;
