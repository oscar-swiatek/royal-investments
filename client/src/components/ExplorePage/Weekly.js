import React, { Component } from 'react'
import ShoppingList from "../ShoppingList";
import ItemModal from "../ItemModal";
import { Container } from "reactstrap";

export default class Weekly extends Component {
    render() {
        return (
          <div>
              <div>
                  active
              </div>
            <Container>
              <ItemModal />
              <ShoppingList />
            </Container>
          </div>
        );
    }
}
