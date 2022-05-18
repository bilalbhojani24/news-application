import React, { Component } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
export class Contact extends Component {
  constructor(props) {
    super(props);
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
  }
  handleChange(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleInterestChange(e) {
    // if already exist then filter
    this.setState({
      interest: [...this.state.interest, e.target.value],
    });
  }
  render() {
    const { fName, lName, email, mobile, gender, interest } = this.state;
    console.log(this.state);
    return (
      <Layout>
        <div className="contact">
          <section className="input__section">
            <label>First Name</label>
            <input
              type="text"
              value={fName}
              name="fName"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__section">
            <label>Last Name</label>
            <input
              type="text"
              value={lName}
              name="lName"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__section">
            <label>Mobile Number</label>
            <input
              type="text"
              value={mobile}
              name="mobile"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__section">
            <label>Email</label>
            <input
              type="text"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </section>
          <section className="input__section">
            <label>Gender</label>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={this.handleChange}
            />
            Male
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={this.handleChange}
            />
            Female
          </section>
          <section className="input__section">
            <label>Interest</label>
            <input
              type="checkbox"
              value="Football"
              onChange={this.handleInterestChange}
            />{' '}
            Football
            <input
              type="checkbox"
              value="Cricket"
              onChange={this.handleInterestChange}
            />{' '}
            Cricket
            <input
              type="checkbox"
              value="Others"
              onChange={this.handleInterestChange}
            />{' '}
            Others
          </section>
          <section className="input__section">
            <Button
              buttonText="Submit"
              onClick={() => {
                console.log(this.state);
              }}
            />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Contact;
