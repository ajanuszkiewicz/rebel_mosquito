import * as React from 'react';

export default function Navigation() {
  return (
    <>
      <div className="flex items-center lg:ml-0 w-48 lg:w-auto self-center">
        <div className="ml-auto">
          <div className="inline-block mr-8 border-grey-100 border-l border-r px-10 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 inline-block align-top mt-1 mr-2 green-text">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
            <div className="inline-block">
              <span className="green-text font-semibold text-xs">EMAIL</span>
              <br />
              <a className='h5 text-gray-600 font-semibold' href='mailto:savemore@rebelmosquito.com'>
                savemore@rebelmosquito.com
              </a>
            </div>
          </div>
          <div className="inline-block border-grey-100 border-r pr-10 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 inline-block align-top mt-1 mr-2 green-text">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <div className="inline-block">
              <span className="green-text font-semibold text-xs">CALL US</span>
              <br />
              <a className='h5 text-gray-600 font-semibold' href='tel:+3432919288'>
                343-291-9288
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
