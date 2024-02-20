import React, { useState } from 'react';
import './SignupForm.css';

export const SignupForm = () => {
  const [email, setEmail] = useState<string>('');

  const handleAddClick = () => {
    console.log(`logic for sending email data:`, email);
    setEmail('');
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter a valid email address"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <button onClick={handleAddClick}>send</button>
    </div>
  );
};
