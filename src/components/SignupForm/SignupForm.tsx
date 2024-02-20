import React, { useState } from 'react';
import './SignupForm.css';
import sendIcon from './../../images/send-icon.png';

export const SignupForm = () => {
  const [email, setEmail] = useState<string>('');

  const handleAddClick = () => {
    console.log(`logic for sending email data:`, email);
    setEmail('');
  };

  return (
    <div className="signup-form">
      <input
        className="signup-form__input"
        type="email"
        placeholder="Enter a valid email address"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <button className="signup-form__btn" onClick={handleAddClick}>
        <img src={sendIcon} alt="icpn of plane" />{' '}
      </button>
    </div>
  );
};
