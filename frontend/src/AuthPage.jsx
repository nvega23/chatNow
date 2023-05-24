import axios from 'axios'
import React, {useState} from 'react';

const AuthPage = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value}
      )
      .then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e=>console.log("error", e))
    };

    const openExternalSite = site => {
      window.open(site);
    };

    return (
      <>
        <div className="navbar">
          <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <nav className={`menu ${menuOpen ? 'open' : ''}`}>
            <ul className="menu-items">
              <li><a target="_blank" href="https://github.com/nvega23">Github</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/nestor-vega-233b43238/">Linkedin</a></li>
              <li><a target="_blank" href="https://angel.co/u/nestorvega23">Wellfound</a></li>
              <li><a target="_blank" href="https://twitter.com/nvega24">Twitter</a></li>
              <li><button className="dropdown" onClick={() => openExternalSite(window.open('mailto:vega.nestor1@gmail.com?subject=subject&body=body'))}><a className="twitterLink">Email The Developer</a></button></li>
            </ul>
          </nav>
        </div>
        <div className="background">
          <form onSubmit={onSubmit} className="form-card">
            <div className="form-title">Welcome 👋</div>
            <div className="form-title-text">Connecting Worlds, One Chat at a Time!</div>

            <div className="form-subtitle">Set a username to get started</div>

            <div className="auth">
              <div className="auth-label">Username</div>
              <input className="auth-input" name="username" />
              <button className="auth-button" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  export default AuthPage;
