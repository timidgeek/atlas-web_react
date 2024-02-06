import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext'

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    
      {user.isLoggedIn && (
        <p className="contact">
          <a href="/contact-us">Contact us</a>
        </p>
      )}
    </footer>
  )
}

export default Footer;
