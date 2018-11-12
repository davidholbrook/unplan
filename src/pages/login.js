import React, { Component } from "react";
import styled from "styled-components";

import { login, resetPassword } from "../helpers/auth";
import Logo from "../components/icons/logo";

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}

export default class LoginPage extends Component {
  state = { loginMessage: null };
  handleSubmit = e => {
    e.preventDefault();
    login(this.email.value, this.pw.value).catch(error => {
      this.setState(setErrorMsg("Invalid username/password."));
    });
  };
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.email.value}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    return (
      <div>
        <Wrapper>
          {this.props.loading === false ? (
            <form onSubmit={this.handleSubmit}>
              <Logo width="100px" height="100px" iconFill="#FD7014" />

              {this.state.loginMessage && (
                <Alert>Error: &nbsp;{this.state.loginMessage}</Alert>
              )}

              <label>Email</label>
              <input
                type="email"
                className="form-control"
                ref={email => (this.email = email)}
                placeholder="david@cool.com"
              />

              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="AwesomePancake88"
                ref={pw => (this.pw = pw)}
              />

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          ) : null}
        </Wrapper>
      </div>
    );
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: #222831;

  display: flex;

  align-items: center;
  justify-content: center;

  ${"" /* counteract the PUSH */}
  margin-left: -25rem;

  @media (max-width: 1500px) {
    margin-left: 0rem;
  }
  form {
    background: #ffffff;

    box-shadow: 0 0 28px 10px rgba(0, 0, 0, 0.2);

    width: 20rem;

    padding: 2rem;

    label {
      font-size: 0.8rem;

      display: block;
      margin-top: 1rem;

      color: #999999;
    }

    input {
      width: 100%;
      font-size: 1.2rem;

      padding: 0.5rem;
    }

    button {
      background: #fd7014;

      font-size: 1rem;
      text-transform: uppercase;
      color: #ffffff;

      border: none;

      display: block;
      margin: 2rem auto 0 auto;
      padding: 1rem 2rem;
    }

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;

const Alert = styled.div`
  background: #e73b55;
  color: #ffffff;
  font-size: 0.8rem;

  text-align: center;

  padding: 1rem;
  margin-top: 1rem;

  a {
    color: #ffffff;
  }
`;
