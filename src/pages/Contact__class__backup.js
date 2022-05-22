import React, { Component } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';

export class Contact extends Component {
  keydownRef = null;
  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      email: '',
      mobile: '',
      gender: '',
      interest: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleInterestChange(e) {
    // check if it already exist in interest array by using filter and then updated or delete
    this.setState({
      [e.target.name]: [...this.state.interest, e.target.value],
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      fName: '',
      lName: '',
      email: '',
      mobile: '',
      gender: '',
      interest: [],
    });
  }

  componentDidMount() {
    this.keydownRef = document.addEventListener(
      'keydown',
      (e) => e.code === 'Enter' && console.log(this.state)
    );
  }

  componentWillUnmount() {
    // perform cleanups
    document.removeEventListener('keydown', this.keydownRef);
  }

  render() {
    const { fName, lName, email, mobile } = this.state;
    console.log(this.state);
    return (
      <Layout>
        <form className="contact" onSubmit={this.handleFormSubmit}>
          <section className="input__container">
            <label>First Name</label>
            <input
              type="text"
              value={fName}
              name="fName"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__container">
            <label>Last Name</label>
            <input
              type="text"
              value={lName}
              name="lName"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__container">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobile}
              name="mobile"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__container">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
            />{' '}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handleChange}
            />
            Other
          </section>
          <section className="input__container">
            <label>Interest</label>
            <input
              type="checkbox"
              name="interest"
              value="Football"
              onChange={this.handleInterestChange}
            />
            Football
            <input
              type="checkbox"
              name="interest"
              value="Cricket"
              onChange={this.handleInterestChange}
            />
            Cricket
            <input
              type="checkbox"
              name="interest"
              value="other"
              onChange={this.handleInterestChange}
            />
            Others
          </section>
          <section className="input__container">
            <Button buttonText="Submit Contact" type="submit" />
          </section>
        </form>
      </Layout>
    );
  }
}

export default Contact;
