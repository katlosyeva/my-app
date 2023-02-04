import {
  Form,
  Button,
  Modal,
  Container,
  FloatingLabel,
  Alert,
} from "react-bootstrap";
import classes from "./RegistrationModal.module.css";
import { useAuth } from "../contexts/AuthContext";

import { useState } from "react";
const AuthModal = (props) => {
  const { currentUser, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [formerrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    let errors = {};

    //email field
    if (!values.email) {
      errors.email = "Напишіть свій імейл";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Введіть вірний імейл";
    }
    //password field
    if (!values.password) {
      errors.password = "Напишіть свій пароль";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    setError("");
    setLoading(true);
    if (validate(values)) {
      try {
        await login(values.email, values.password);
        setTimeout(() => {
          props.handleClose();
        }, 1000);
      } catch {
        setError("Помилка авторизації");
      }
    }
    setLoading(false);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Авторизація</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert>{error}</Alert>}
        {currentUser && <Alert>Ви успішно авторизовані</Alert>}
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="my-3"
          >
            <Form.Control
              type="email"
              onChange={handleChange}
              className={formerrors.email ? `${classes.redBorder} mb-1` : ""}
              name="email"
              placeholder="Email"
            />
          </FloatingLabel>
          {formerrors.email && (
            <p className="text-danger">{formerrors.email}</p>
          )}
          <FloatingLabel
            className="mb-3"
            controlId="floatingPassword"
            label="Пароль"
          >
            <Form.Control
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              name="password"
              className={formerrors.password ? classes.redBorder : ""}
            />
          </FloatingLabel>
          {formerrors.password && (
            <p className="text-danger">{formerrors.password}</p>
          )}

          <Container>
            <a role="button" className="pe-1" onClick={props.openForgotModal}>
              Забули пароль?
            </a>
          </Container>

          <Container className="d-flex justify-content-center mx-3 my-3">
            <Button
              disabled={loading}
              className={classes.button}
              type="submit"
              variant="primary"
            >
              Увійти
            </Button>
          </Container>
        </Form>
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
