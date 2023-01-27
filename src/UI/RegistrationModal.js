import { useRef } from "react";
import {
  Form,
  Button,
  Modal,
  Container,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import { Formik } from "formik";

const RegistrationModal = (props) => {
  // const passwordIsValid =isLengthy && hasUpper && hasLower && hasNumber && hasSpecial;
  // const confirmPasswordIsValid = password && confirmPassword;
  // const nameIsVaild = IsMoreThanTwo(email);
  // const lastnameIsVaild = IsMoreThanTwo(email);
  // const emailIsVaild = IsMoreThanTwo(email);
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [validated, setValidated] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [lastnameIsValid, setLastnameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const isLengthy = password.length > 8;
    const hasUpper = /[A_Z]/.test(password);
    const hasLower = /[a_z]/.test(password);
    const hasNumber = /[0_9]/.test(password);
    const hasSpecial = /[@,#,$,%,&,*,~]/.test(password);

    const isMoreThanTwo = (value) => value.trim().length > 2;

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {

    //   event.stopPropagation();

    setPasswordIsValid(
      isLengthy && hasUpper && hasLower && hasNumber && hasSpecial
    );
    setNameIsValid(isMoreThanTwo(name));
    setLastnameIsValid(isMoreThanTwo(lastname));
    setEmailIsValid(/\S+@\S+\.\S+/.test(email));
    setConfirmPasswordIsValid(password === confirmPassword);
    setValidated(
      passwordIsValid &&
        nameIsValid &&
        lastnameIsValid &&
        emailIsValid &&
        confirmPasswordIsValid
    );
    console.log(nameIsValid, emailIsValid, passwordIsValid, validated);
    setValidated(true);
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  const validateUsername = (value) => {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleCloseRegistration}>
        <Modal.Header closeButton>
          <Modal.Title>Реєстрація</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }}
          >
            {({ values, errors, touched, validateField, validateForm }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="my-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    noValidate
                    controlId="validationCustom01"
                  >
                    <FloatingLabel label="Ім'я">
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <FloatingLabel label="Прізвище">
                      <Form.Control
                        type="text"
                        placeholder="Лосєва"
                        ref={lastnameRef}
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <FloatingLabel
                  controlId="validationCustom03"
                  label="Email"
                  className="my-3"
                  ref={emailRef}
                  required
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <Row className="mb-2">
                  <Form.Group as={Col} md="6" controlId="validationCustom04">
                    <FloatingLabel label="Пароль">
                      <Form.Control
                        type="password"
                        placeholder="Пароль"
                        ref={passwordRef}
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom05">
                    <FloatingLabel label="Повторіть пароль">
                      <Form.Control
                        type="password"
                        placeholder="Повторіть пароль"
                        ref={confirmPasswordRef}
                        required
                      />
                    </FloatingLabel>
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
                  <Button className="px-5" type="submit" variant="primary">
                    Зареєструватися
                  </Button>
                </Container>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegistrationModal;
