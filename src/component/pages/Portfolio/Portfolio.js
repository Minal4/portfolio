import React from 'react';
import Abletone from '../../images/abletone-dark.jpg';
import SimClick from '../../images/simClick.jpg';
import Biz from '../../images/biz.jpg';
import Blog from '../../images/blog.jpg';
import Main from '../../images/main.jpg';
import SignifyPro from '../../images/signifyPro.jpg';
import FgTelecom from '../../images/fgtelcom.jpg';
import Civil from '../../images/civil.jpg';
import BodyLogic from '../../images/bodylogic.jpg';

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="section__heading">
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio__content">
          <ul>
            <li>
              <a href="https://catchthemes.com/demo/abletone-dark/">
                <img src={Abletone} alt="Dark" />
              </a>
              <p></p>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/simclick-pro/">
                <img src={SimClick} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/corporate-biz-pro/">
                <img src={Biz} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/catch-sketch-blog/">
                <img src={Blog} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://catchthemes.com/demo/catch-sketch-pro/">
                <img src={Main} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="http://fgtelecom.com.au/">
                <img src={FgTelecom} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://civilhomes.com.np/">
                <img src={Civil} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://bodylogic.physio/">
                <img src={BodyLogic} alt="Dark" />
              </a>
            </li>
            <li>
              <a href="https://themepalace.com/theme-demo/?demo=Mk56ZGY5TVJhVlg0enkwNWRkaW9hUT09">
                <img src={SignifyPro} alt="Dark" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
