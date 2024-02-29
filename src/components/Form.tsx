/* eslint-disable no-console */

import React, { ChangeEvent, FormEvent, useRef } from 'react';

interface FormData {
  first_name: string;
  last_name: string;
  mobile_number: string;
}

const ContactForm: React.FC = () => {
  const formDataRef = useRef<FormData>({
    first_name: '',
    last_name: '',
    mobile_number: '',
  });

  const token = 'UZUbsXQc8KlODQDtSgFQvA';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    formDataRef.current = {
      ...formDataRef.current,
      [e.target.name]: e.target.value,
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          body: JSON.stringify({
            contact: formDataRef.current,
          }),
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Contact created:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='first_name'>First Name:</label>
          <input
            type='text'
            id='first_name'
            name='first_name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='last_name'>Last Name:</label>
          <input
            type='text'
            id='last_name'
            name='last_name'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='mobile_number'>Mobile Number:</label>
          <input
            type='text'
            id='mobile_number'
            name='mobile_number'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
