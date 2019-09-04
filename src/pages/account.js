import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { base } from "../components/fire";

class Users extends Component {
  state = {
    fName: "",
    value: ""
  };

  componentWillMount() {
    const uid = this.props.user;
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <Main>
          <h1>
            Hello, {this.state.value.length !== 0 ? this.state.value : "👽"}!
          </h1>
          <hr />
          <label for="cnm" class="h4">
            Change you name
          </label>
          <input
            type="text"
            name="cnm"
            ref={input => (this.text = input)}
            onChange={input => this.handleChange(input)}
          />
        </Main>
      </>
    );
  }
}

export default Users;

const Main = styled.main`
  width: 98%;
  max-width: 1000px;
  height: 15rem;

  margin: 1rem auto;
`;
