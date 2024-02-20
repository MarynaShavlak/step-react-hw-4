import React, { FC, useState } from 'react';
import './SignupSection.css';
import { SignupForm } from '../SignupForm';

export const SignupSection = () => {
  return (
    <div className="signup-section">
      <div className="container container--centered">
        <h3 className="card__title signup-title ">
          Sign up for our newsletter!
        </h3>
        <SignupForm />
      </div>
    </div>
  );
};
