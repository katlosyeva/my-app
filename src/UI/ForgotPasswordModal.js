import { Form, Button, Modal, Container, FloatingLabel } from "react-bootstrap";
import classes from "./RegistrationModal.module.css";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const ForgotPasswordModal = (props) => {
  const { forgotpassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    email: "",
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
        await forgotpassword(values.email);
      } catch {
        setError("Користувач з таким імейлом не зареєстрований");
      }
    }
    setLoading(false);
  };
  return (
    <Modal show={props.show} onHide={props.closeForgotModal}>
      <Modal.Header closeButton>
        <Modal.Title>Відновлення паролю</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mx-3" controlId="formforgotpassword">
          <Form.Label className="mt-4">
            Введіть ваш E-mail. На нього будуть вислані інструкції по відновленю
            паролю.
          </Form.Label>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3"
          >
            <Form.Control
              onChange={handleChange}
              className={formerrors.email ? `${classes.redBorder} mb-3` : ""}
              name="email"
              placeholder="Email"
            />
          </FloatingLabel>
          {formerrors.email && (
            <p className="text-danger">{formerrors.email}</p>
          )}
        </Form.Group>
        <Container className="d-flex justify-content-center mx-3 my-3">
          <Button
            disabled={loading}
            className={classes.button}
            type="submit"
            variant="primary"
          >
            Відправити
          </Button>
        </Container>
      </Form>
    </Modal>
  );
};

export default ForgotPasswordModal;
