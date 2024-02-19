import './Navbar.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinks = [
    { href: './', text: 'Lifestyle' },
    { href: './photodiary', text: 'Photodiary' },
    { href: './music', text: 'Music' },
    { href: './travel', text: 'Travel' },
  ];

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            MINIMO
          </NavLink>

          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-list__item">
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-list__link nav-list__link--active'
                      : 'nav-list__link '
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
