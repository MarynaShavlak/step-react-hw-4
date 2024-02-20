import './Footer.css';
import { SocialIconButton } from '../SocialIconButton';

const socialLinks = [
  { id: 119, alt: 'facebook', url: 'https://www.facebook.com/' },
  { id: 219, alt: 'twitter', url: 'https://twitter.com/' },
  { id: 319, alt: 'instagram', url: 'https://www.instagram.com/' },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="copyright">
            <p>Terms and conditions</p>
            <p>Privacy</p>
          </div>
          <div className="copyright">
            <p>Follow</p>
            <ul className="social">
              {socialLinks.map((link, index) => (
                <li className="social__item" key={index}>
                  <SocialIconButton
                    id={link.id}
                    name={link.alt}
                    url={link.url}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
