import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import ReactS3Uploader from 'react-s3-uploader-multipart';

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    selectedFile: null,
    description: ""
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    isAdmin: PropTypes.bool
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    // Add item via addItem action
    this.props.addItem(newItem);

    // Close modal
    this.toggle();
  };

  checkAdmin = e => {};

  render() {
    return (
      <div>
        {this.props.isAuthenticated && this.props.isAdmin ? (
          <Button
            style={{ marginBottom: "2rem", backgroundColor: "black" }}
            onClick={this.toggle}
          >
            Add Item
          </Button>
        ) : null}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add item"
                  onChange={this.onChange}
                />
                {/* <ReactS3Uploader /> */}
                <Button
                  style={{ marginTop: "2rem", backgroundColor: "black" }}
                  block
                >
                  Add Item
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
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.isAdmin
});

export default connect(mapStateToProps, { addItem })(ItemModal);
