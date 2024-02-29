/* eslint-disable no-console */

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = 'UZUbsXQc8KlODQDtSgFQvA';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://rebelmosquito-679106251063943741.myfreshworks.com/crm/sales/api/contacts',
        {
          method: 'POST',
          headers: {
            Authorization: `Token token=${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ contact: formData }),
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Handle success response here
      alert('Contact added successfully!');
      // Optionally, you can redirect the user to another page after successful submission
      // window.location.href = 'success.html';
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to add contact. Please try again.');
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name:</label>
        <br />
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor='lastName'>Last Name:</label>
        <br />
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor='mobileNumber'>Mobile Number:</label>
        <br />
        <input
          type='tel'
          id='mobileNumber'
          name='mobileNumber'
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
