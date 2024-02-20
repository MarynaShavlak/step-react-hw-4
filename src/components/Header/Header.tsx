import './Header.css';
import heroImg from './../../images/hero.png';
export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={heroImg} alt="Main pic of page" />
      </div>
    </header>
  );
};
