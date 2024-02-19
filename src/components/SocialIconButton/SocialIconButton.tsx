import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './SocialIconButton.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IBtn, IconMap } from './SocialIconButton.types.ts';

const iconMap: IconMap = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

export const SocialIconButton: FC<IBtn> = ({ name, url }) => {
  const IconComponent = iconMap[name] || null;
  return <Link to={url}>{IconComponent && <IconComponent />}</Link>;
};
