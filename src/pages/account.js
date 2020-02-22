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
    //TODO add in current name and submit new name
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <section className="transparent">
          <h1 className="sectionTitle">Change Your Name</h1>
          <h2 class="h4">
            Hello, {this.state.value.length !== 0 ? this.state.value : "👽"}!
          </h2>
          <label for="first" class="h5">
            First Name
          </label>
          <input
            type="text"
            name="first"
            ref={input => (this.text = input)}
            onChange={input => this.handleChange(input)}
          />
          <label for="cnm" class="h5">
            Last Name
          </label>
          <input type="text" name="last" />
          <button className="button primary small">Submit</button>
        </section>
      </>
    );
  }
}

export default Users;
