import React, { Component } from "react";

import axios from "axios";

// import register from "./register.png";

// import NavLogin from "../navbar/navbar_login";

import "./create-register.css";

import { Link } from "react-router-dom";

// import Nav from "../nav";

export default class CreateRegister extends Component {
  constructor(props) {
    super(props);

    // Setting up functions

    this.onChangeuserbookingFirstName =
      this.onChangeuserbookingFirstName.bind(this);

    this.onChangeuserbookingLastName =
      this.onChangeuserbookingLastName.bind(this);

    this.onChangeuserbookingMobile = this.onChangeuserbookingMobile.bind(this);

    this.onChangeuserbookingEmail = this.onChangeuserbookingEmail.bind(this);

    this.onChangeuserbookingPassword =
      this.onChangeuserbookingPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state

    this.state = {
      firstname: "",

      lastname: "",

      mobile: "",

      email: "",

      password: "",
    };
  }

  onChangeuserbookingFirstName(e) {
    this.setState({ firstname: e.target.value });
  }

  onChangeuserbookingLastName(e) {
    this.setState({ lastname: e.target.value });
  }

  onChangeuserbookingMobile(e) {
    this.setState({ mobile: e.target.value });
  }

  onChangeuserbookingEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeuserbookingPassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userbookingObject = {
      firstname: this.state.firstname,

      lastname: this.state.lastname,

      mobile: this.state.mobile,

      email: this.state.email,

      password: this.state.password,
    };

    axios

      .post(
        "http://localhost:4000/users/create-user",

        userbookingObject
      )

      .then((res) => console.log(res.data));

    this.setState({
      firstname: "",

      lastname: "",

      mobile: "",

      email: "",

      password: "",
    });
  }

  render() {
    return (
      <>
        {/* <Nav /> */}

        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <h4 style={{ color: "white" }}>Register</h4>

              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  className="img-create"
                  //   src={register}
                  alt=" register logo"
                />
              </div>

              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={this.onSubmit}>
                  <div className="form-outline mb-4">
                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="firstname">
                          First Name
                        </label>

                        <input
                          type="text"
                          id="firstname"
                          className="form-control"
                          value={this.state.firstname}
                          onChange={this.onChangeuserbookingFirstName}
                        />
                      </div>

                      <div className="col">
                        <label className="form-label" htmlFor="lastname">
                          Last Name
                        </label>

                        <input
                          type="text"
                          id="lastname"
                          className="form-control"
                          value={this.state.lastname}
                          onChange={this.onChangeuserbookingLastName}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="mobile">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      id="mobile"
                      className="form-control form-control-lg"
                      required
                      value={this.state.mobile}
                      onChange={this.onChangeuserbookingMobile}
                    />
                  </div>

                  {/* Email input */}

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      required
                      value={this.state.email}
                      onChange={this.onChangeuserbookingEmail}
                    />
                  </div>

                  {/* Password input */}

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>

                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      value={this.state.password}
                      onChange={this.onChangeuserbookingPassword}
                    />
                  </div>

                  <div className="buttons--two">
                    <Link to="/">
                      <button
                        style={{ color: "white" }}
                        type="reset"
                        className="btn btn-md btn-outline-danger btn-block"
                      >
                        Cancel
                      </button>
                    </Link>

                    <button className="btn btn-dark btn-md" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
