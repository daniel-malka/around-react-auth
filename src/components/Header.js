import { useEffect, useState } from 'react';
import logo from '../images/top__logo.svg';
import hamburger_icon from '../images/hamburger_icon.svg';
import closeX from '../images/close-X.svg';

import { Link, useLocation } from 'react-router-dom';
const Header = ({ isLoggedIn, email, handleSignout }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isMobile) {
      setIsMobile(false);
    }
  }, [isMobile]);
  const handleMenuButton = () => {
    setIsMobileHeaderOpen(!isMobileHeaderOpen);
  };
  return (
    <header className={isMobile ? 'header header__mobile' : 'header'}>
      {!isMobile ? (
        <img
          src={logo}
          alt="AROUND the us logo"
          className="header__logo"
          onClick={handleMenuButton}
        />
      ) : (
        ''
      )}
      {isMobile && isMobileHeaderOpen ? (
        <>
          <div className="header__menu">
            <p className="header__email">{email}</p>
            <p className="header__text" onClick={handleSignout}>
              Log out
            </p>
          </div>

          <div className="header__boarder-line"></div>
        </>
      ) : (
        ''
      )}

      {isLoggedIn ? (
        <div className="header__container">
          {isMobile ? (
            <img
              src={logo}
              alt="AROUND the us logo"
              className={
                isMobile ? 'header__logo header__logo-mobile' : 'header__logo'
              }
              onClick={handleMenuButton}
            />
          ) : (
            ''
          )}

          {isMobile ? (
            <img
              clasName="header__mobile-menu-button"
              onClick={handleMenuButton}
              src={isMobileHeaderOpen ? closeX : hamburger_icon}
            />
          ) : (
            <>
              <p className="header__email">{email}</p>
              <p className="header_text" onClick={handleSignout}>
                Log out
              </p>
            </>
          )}
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
      )}
    </header>
  );
};
export default Header;
