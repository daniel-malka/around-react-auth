import { useEffect, useState } from 'react';
import logo from '../images/top__logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, email, handleSignout }) => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHeaderMenuOpen) {
      setIsHeaderMenuOpen(false);
    }
  }, [isHeaderMenuOpen]);

  return (
    <header
      className={isHeaderMenuOpen ? 'header__wrapper-mobile-open' : 'header'}
    >
      <img src={logo} alt="AROUND the us logo" className="header__logo" />
    </header>
  );
};
export default Header;
