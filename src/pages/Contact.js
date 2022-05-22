import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';

const Contact = () => {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    mobile: '',
    gender: '',
  });
  const [interest, setInterest] = useState([]);

  useEffect(() => {
    const keydownRef = document.addEventListener(
      'keydown',
      (e) => e.code === 'Enter' && console.log(this.state)
    );

    return () => {
      console.log('Component Unmount');
      document.removeEventListener('keydown', keydownRef);
    };
  }, []); // component did mount (run only once)

  //   useEffect(() => {
  //     if (interest.length > 0) console.log('Component Did Update');
  //   }, [interest]); // component did update (run only once)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (e) => {
    // check if it already exist in interest array by using filter and then updated or delete
    setInterest([...interest, e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, interest);
  };
  return (
    <Layout>
      <form className="contact" onSubmit={handleSubmit}>
        <section className="input__container">
          <label>First Name</label>
          <input
            type="text"
            value={user.fName}
            name="fName"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Last Name</label>
          <input
            type="text"
            value={user.lName}
            name="lName"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Mobile Number</label>
          <input
            type="text"
            value={user.mobile}
            name="mobile"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </section>
        <section className="input__container">
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          Other
        </section>
        <section className="input__container">
          <label>Interest</label>
          <input
            type="checkbox"
            name="interest"
            value="Football"
            onChange={handleInterestChange}
          />
          Football
          <input
            type="checkbox"
            name="interest"
            value="Cricket"
            onChange={handleInterestChange}
          />
          Cricket
          <input
            type="checkbox"
            name="interest"
            value="other"
            onChange={handleInterestChange}
          />
          Others
        </section>
        <section className="input__container">
          <Button buttonText="Submit Contact" type="submit" />
        </section>
      </form>
    </Layout>
  );
};

export default Contact;
