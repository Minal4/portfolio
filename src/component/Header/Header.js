import React from 'react';
import scroller from '../../component/images/scroller.png';
import TopLogo from '../../component/images/top-logo.png';
import Background from '../images/sunset.jpg';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>
      <div id="waterHolder">
        <a className="scroller" href="#features">
          <img src={scroller} className="img-responsive" alt="scroller" />
        </a>
        <div className="header__top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={TopLogo} className="img-responsive" alt="top-logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse custom-nav"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link active" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/portfolio">
                    Portfolio
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/aboutus">
                    About us
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/services">
                    Services
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/faq">
                    Faq
                  </NavLink>
                </div>
              </div>
              {/* <!-- /.navbar-collapse --> */}
            </div>
          </nav>
          <div
            className="hero"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <div className="container">
              <div className="hero__content">
                <h1>
                  Designer + <br />
                  Developer
                </h1>
                <p className="entry-content">
                  Hi! Do you need some help with design and development
                </p>
                <Button className="btn btn-primary ">Let's Talk</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
