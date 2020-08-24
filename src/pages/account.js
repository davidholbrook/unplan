import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { base } from "../components/fire";

class Users extends Component {
  state = {
    first: "",
    last: "",
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <section className="transparent">
          <h1 className="sectionTitle">Change Your Name</h1>
          <label for="first" class="h5">
            First Name
          </label>
          <input
            type="text"
            name="first"
            ref={(first) => (this.text = first)}
          />
          <label for="lst" class="h5">
            Last Name
          </label>
          <input type="text" name="last" ref={(last) => (this.text = last)} />
          <button className="button primary small">Submit</button>
        </section>
      </>
    );
  }
}

export default Users;
