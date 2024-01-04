// Newsletter.js
import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call your backend API to subscribe the user
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle success (e.g., display a success message)
        setEmail('');
      } else {
        // Handle error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>

      <div className='newsinput'>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">
          <img src="./images/submit.png" alt="Subscribe" />
        </button>
      </form>
      </div>
      
    </div>
  );
}

export default Newsletter;
