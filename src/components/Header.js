import { useEffect, useState } from 'react';
import logo from '../images/top__logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isLoggedIn, email, handleSignout }) => {
  //whichComponentIsRenderedNow false for sign up else signin
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (!isHeaderMenuOpen) {
      setIsHeaderMenuOpen(false);
    }
  }, [isHeaderMenuOpen]);

  return (
    <header
      className={
        isHeaderMenuOpen ? 'header header__wrapper-mobile-open' : 'header'
      }
    >
      <img src={logo} alt="AROUND the us logo" className="header__logo" />
      {isLoggedIn ? (
        <div className="header__container">
          <p className="header__email">{email}</p>
          <p className="header_text" onClick={handleSignout}>
            Log out
          </p>
        </div>
      ) : (
        <div className="header__redirect">
          {' '}
          <Link
            className="header__redirect-login"
            to={location.pathname === '/signin' ? 'signup' : 'signin'}
          >
            {location.pathname === '/signin' ? 'signup' : 'signin'}
          </Link>
        </div>
      )}{' '}
    </header>
  );
};
export default Header;
