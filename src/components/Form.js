/* eslint-disable no-console */

import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Example() {
  const [goodResponse, setGoodResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = new FormData(e.target);
    const payload = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      work_number: data.get('work_number'),
      custom_field: {
        cf_customer_message: data.get('message'),
      },
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

      setIsLoading(false);

      const data = await response.json();
      console.log(data); // Handle success response here
      // Optionally, you can redirect the user to another page after successful submission
      // window.location.href = 'success.html';
      if (data.contact) {
        setGoodResponse(true);
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <>
      {isLoading && (
        <ThreeDots
          visible={true}
          height='80'
          width='80'
          color='#822f89'
          radius='9'
          ariaLabel='three-dots-loading'
          wrapperStyle={{}}
          wrapperClass='justify-center my-20'
        />
      )}
      {goodResponse && (
        <div className='mx-auto max-w-2xl text-center mt-20'>
          <h2 className='font-bold tracking-tight sm:text-4xl'>
            Request succesfully submitted.
          </h2>
        </div>
      )}
      {!isLoading && !goodResponse && (
        <div className='isolate bg-white mt-20 px-6 lg:px-8'>
          <form onSubmit={handleSubmit} className='mx-auto max-w-xl'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='first_name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  First name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='first_name'
                    id='first_name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last_name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='last_name'
                    id='last_name'
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='work_number'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Phone number
                </label>
                <div className='relative mt-2.5'>
                  <input
                    type='tel'
                    name='work_number'
                    id='work_number'
                    autoComplete='tel'
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    required
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue=''
                  />
                </div>
              </div>
            </div>
            <div className='mt-10'>
              <button
                type='submit'
                className='block w-full rounded-md primary-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
