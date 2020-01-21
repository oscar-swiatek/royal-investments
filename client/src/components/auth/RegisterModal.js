import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import Countdown, { zeroPad } from "react-countdown-now";
import PayButton from "../PayPal";

class RegisterModal extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    adminCode: "",
    msg: null,
    active: 0
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "REGISTER_FAIL" || error.id === "REGISTER_FAIL_ADMIN") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // If authenticated, close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }

  // success = () => {
  //   this.setState({ active: 1 });
  // };

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password, adminCode } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password,
      adminCode
    };

    // Attempt to register
    this.props.register(newUser);
  };

  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      window.location.reload();
    } else {
      return (
        <span className="conatiner-fluid">
          {zeroPad(minutes)}:{zeroPad(seconds)} - Time until refresh
        </span>
      );
    }
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href="#">
          Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Countdown
                  date={Date.now() + 600000}
                  renderer={this.renderer}
                />
                <hr />
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3"
                  onChange={this.onChange}
                />

                <Label for="code">Admin Code (Optional)</Label>
                <Input
                  type="code"
                  name="adminCode"
                  id="adminCode"
                  placeholder="Admin Code"
                  className="mb-3"
                  onChange={this.onChange}
                />
                {this.state.adminCode !== "45853" ? (
                  <PayButton
                    currency={"GBP"}
                    components
                    // onSuccess={this.success()}
                  />
                ) : null}
                <Button
                  style={{ marginTop: "2rem", backgroundColor: "black" }}
                  block
                  // disabled={this.state.active === 0}
                >
                  Register
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
