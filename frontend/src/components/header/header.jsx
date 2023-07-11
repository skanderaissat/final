import React from "react";
import "./header.css";
import { useSelector } from "react-redux";

import images from "../../imgs/profile.jpg";

function Header() {
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);

  return (
    <>
      <header className="site-header">
        <div className="wra">
          <div className="title-area">
            <a href="/Home" rel="home">
              <img
                src={images}
                width="90"
                height="125"
                className="custom-logo"
                alt=""
                sizes="(max-width: 400px) 100vw, 400px"
              />
            </a>
          </div>
        </div>
      </header>
      <nav>
        <div className="wrap">
          <ul>
            <li>
              <a href="/Pains" itemProp="url">
                <span itemProp="name">Pain</span>
              </a>
            </li>
            <li>
              <a href="/Gateaux" itemProp="url">
                <span itemProp="name">Gateaux</span>
              </a>
            </li>
            <li>
              <a href="/Salé" itemProp="url">
                <span itemProp="name">Salé</span>
              </a>
            </li>
            <li>
              <a href="/hlouTounsi" itemProp="url">
                <span itemProp="name">hlou tounsi</span>
              </a>
            </li>
            <li>
              <a href="/Gourmandise" itemProp="url">
                <span itemProp="name">Gourmandises</span>
              </a>
            </li>
            <li className="menu-item alignrightitemmenu">
              <a className="cart-contents" href="/Panier" rel="nofollow">
                <span itemProp="name">Panier</span>
              </a>
            </li>
            {isAuthenticated ? (
              <li>
                <a rel="nofollow" href="/Profile" itemProp="url">
                  <span itemProp="name">Mon compte</span>
                </a>
              </li>
            ) : (
              <li>
                <a rel="nofollow" href="/login" itemProp="url">
                  <span itemProp="name">Mon compte</span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;