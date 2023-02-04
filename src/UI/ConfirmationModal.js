import { Button, Modal, Container, Alert } from "react-bootstrap";
import classes from "./RegistrationModal.module.css";
// import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const ForgotPasswordModal = (props) => {
  //   const { forgotpassword } = useAuth();
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    setLoading(true);
    props.logout();
    setLoading(false);
  };
  return (
    <Modal show={props.show} onHide={props.close}>
      {props.errorState && <Alert>{props.errorState}</Alert>}

      <p class="text-center mt-5">Ви впевнені, що хочете виконати цю дію?</p>
      <Container className="d-flex justify-content-center mx-2 my-2">
        <Button
          disabled={loading}
          className={classes.button}
          type="submit"
          variant="primary"
          onClick={handleSubmit}
        >
          {props.text}
        </Button>
      </Container>
    </Modal>
  );
};

export default ForgotPasswordModal;
