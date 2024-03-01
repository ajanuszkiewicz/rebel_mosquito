/* eslint-disable no-console */

import React from 'react';

function ContactForm() {
  // const [formData, setFormData] = useState({
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   work_number: '',
  // });

  // const handleChange = (e) => {
  //   console.log(e);

  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = async (e) => {
    console.log('Poop');
    e.preventDefault();
    const data = new FormData(e.target);

    const payload = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      work_number: data.get('work_number'),
    };

    try {
      const response = await fetch('/api/crm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact: payload }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data); // Handle success response here
      // Optionally, you can redirect the user to another page after successful submission
      // window.location.href = 'success.html';
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor='first_name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            First Name
          </label>
          <div className='relative mt-2'>
            <input
              type='first_name'
              name='first_name'
              id='first_name'
              className='peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='John'
            />
            <div
              className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600'
              aria-hidden='true'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='last_name'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Last Name
          </label>
          <div className='relative mt-2'>
            <input
              type='last_name'
              name='last_name'
              id='last_name'
              className='peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Doe'
            />
            <div
              className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600'
              aria-hidden='true'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='work_number'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Phone Number
          </label>
          <div className='relative mt-2'>
            <input
              type='tel'
              name='work_number'
              id='work_number'
              className='peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='###-###-####'
            />
            <div
              className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600'
              aria-hidden='true'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Email Address
          </label>
          <div className='relative mt-2'>
            <input
              type='email'
              name='email'
              id='email'
              className='peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='you@email.com'
            />
            <div
              className='absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600'
              aria-hidden='true'
            />
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
