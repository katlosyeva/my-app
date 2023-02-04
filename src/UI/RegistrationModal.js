import classes from "./RegistrationModal.module.css";
import { useAuth } from "../contexts/AuthContext";

import {
  Form,
  Button,
  Modal,
  Container,
  FloatingLabel,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import { useState } from "react";

const RegistrationModal = (props) => {
  const { signup, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    //name field
    if (!values.name) {
      errors.name = "Напишіть своє ім'я";
    }

    //name field
    if (!values.lastname) {
      errors.lastname = "Напишіть своє прізвище";
    }

    //email field
    if (!values.email) {
      errors.email = "Напишіть свій імейл";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Введіть вірний імейл";
    }
    //email field
    if (!values.password) {
      errors.password = "Напишіть свій пароль";
    } else if (
      /[A_Z]/.test(values.password) &&
      /[0_9]/.test(values.password) &&
      /[@,#,$,%,&,*,~]/.test(values.password)
    ) {
      errors.password = "Придумайте безпечний пароль";
    }
    //email field
    if (!values.password) {
      errors.confirmPassword = "Напишіть свій пароль ще раз";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Паролі не співпадають";
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
        await signup(values.email, values.password);
      } catch {
        setError("Невдалося зареєструвати користувача");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleCloseRegistration}>
        <Modal.Header closeButton>
          <Modal.Title>Реєстрація</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {currentUser && !error && (
            <p className="text-danger">
              Ви успішно зареєстровані {currentUser && currentUser.email}
            </p>
          )} */}
          {currentUser && (
            <Alert>
              Ви успішно зареєстровані {currentUser && currentUser.email}
            </Alert>
          )}

          {error && <Alert>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row className="my-3">
              <Form.Group as={Col} md="6">
                <FloatingLabel label="Ім'я">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Катерина"
                    onChange={handleChange}
                    className={formerrors.name ? classes.redBorder : ""}
                  />

                  {formerrors.name && (
                    <p className="text-danger">{formerrors.name}</p>
                  )}
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <FloatingLabel label="Прізвище">
                  <Form.Control
                    type="text"
                    placeholder="Лосєва"
                    name="lastname"
                    onChange={handleChange}
                    className={formerrors.lastname ? classes.redBorder : ""}
                  />
                </FloatingLabel>
                {formerrors.lastname && (
                  <p className="text-danger">{formerrors.lastname}</p>
                )}
              </Form.Group>
            </Row>
            <FloatingLabel label="Email">
              <Form.Control
                onChange={handleChange}
                className={formerrors.email ? `${classes.redBorder} mb-1` : ""}
                name="email"
                placeholder="Email"
              />
            </FloatingLabel>
            {formerrors.email && (
              <p className="text-danger">{formerrors.email}</p>
            )}
            <Row className="mt-3 mb-2">
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <FloatingLabel label="Пароль">
                  <Form.Control
                    type="password"
                    placeholder="Пароль"
                    onChange={handleChange}
                    name="password"
                    className={formerrors.password ? classes.redBorder : ""}
                  />
                  {formerrors.password && (
                    <p className="text-danger">{formerrors.password}</p>
                  )}
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom05">
                <FloatingLabel label="Повторіть пароль">
                  <Form.Control
                    type="password"
                    placeholder="Повторіть пароль"
                    onChange={handleChange}
                    name="confirmPassword"
                    className={
                      formerrors.confirmPassword ? classes.redBorder : ""
                    }
                  />
                </FloatingLabel>
                {formerrors.confirmPassword && (
                  <p className="text-danger">{formerrors.confirmPassword}</p>
                )}
              </Form.Group>
            </Row>
            <Form.Check
              className="small"
              required
              label="Я згоден з політикою конфіденційності та даю згоду на обробку своїх персональних даних."
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
            <Container className="d-flex justify-content-center mx-3 my-3">
              <Button
                disabled={loading}
                className={classes.button}
                type="submit"
                variant="primary"
              >
                Зареєструватися
              </Button>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistrationModal;
