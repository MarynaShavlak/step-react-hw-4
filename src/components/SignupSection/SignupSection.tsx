import React, { FC, useState } from 'react';
import './SignupSection.css';
import { SignupForm } from '../SignupForm';

export const SignupSection = () => {
  return (
    <>
      <h3 className="card__title">Sign up for our newsletter!</h3>
      <SignupForm />
    </>
  );
};
