import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: ''
  });

  const token = 'UZUbsXQc8KlODQDtSgFQvA'
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://rebelmosquito-679106251063943741.myfreshworks.com/crm/sales/api/contacts", {
      method: "POST",
      headers: {
        "Authorization": "Token token=UZUbsXQc8KlODQDtSgFQvA",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contact: {
          first_name: "James",
          last_name: "Sampleton (sample)",
          mobile_number: "1-926-555-9503"
        }
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Contact created:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile_number">Mobile Number:</label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            value={formData.mobile_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
