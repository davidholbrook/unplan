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
          <form onSubmit={this.handleSubmit}>
            <Logo width="150px" height="150px" iconFill="#FD7014" />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              ref={email => (this.email = email)}
              placeholder="adam@awesomewater.com"
            />

            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Wow, Awesome!"
              ref={pw => (this.pw = pw)}
            />
            {this.state.loginMessage && (
              <div className="alert alert-danger" role="alert">
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                />
                <span className="sr-only">Error:</span>
                &nbsp;{this.state.loginMessage}{" "}
                <a href="#" onClick={this.resetPassword} className="alert-link">
                  Forgot Password?
                </a>
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
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
      display: block;
      margin-top: 1rem;

      color: #999999;
    }

    input {
      width: 100%;
      font-size: 1.5rem;
    }

    button {
      background: #fd7014;

      font-size: 1.5rem;
      text-transform: uppercase;
      color: #ffffff;

      border: none;

      display: block;
      margin: 2rem auto;
      padding: 1rem 2rem;
    }

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
