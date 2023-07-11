import React from "react";
import imge from "../../imgs/profile.jpg";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <div className="row">
          <div className="col center">
            <div className="container">
            <section className="footer-section">
              <div className="footer-logo">
                <img
                  width="200"
                  height="180"
                  src={imge}
                  alt="Pâtisserie Fleur D'Oranger"
                />
              </div>
              <div style={{ height: "20px" }} className=""></div>
              <div className="footer-info ">
                <p className="footer-address text-center">
                  Pâtisserie Fleur D'Oranger
                  <br />
                  <a
                    href="https://goo.gl/maps/krMRwWxfKMYebGBN9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    avenue habib karma
                    <br />
                    NABEUL
                  </a>
                </p>
                <p className="footer-phone text-center">Tél. : 53186660</p>
              </div>
              
            </section>
            </div>
          </div>
          
            <section className="col footer-section">
              <div className="container">
              <h3 className="footer-title ">Boutique en ligne</h3>
              <ul style={{
                    display: "grid ",
                    rowGap: "20px",
                  }} className="footer-menu ">
                <li  >
                  <a  href="/gateaux" >Gateaux</a>
                </li>
                <li>
                  <a  href="/Gourmandise">Gourmandises</a>
                </li>
                <li>
                  <a  href="/Pains">Pains</a>
                </li>
                <li>
                  <a  href="/Salé">Salé</a>
                </li>
                <li>
                  <a  href="/HlouTounsi">Hlou Tounsi</a>
                </li>
              </ul>
              </div>
            </section>
            <section className="col footer-section">
              <div className="container">
              <h3 className="footer-title ">Réseaux sociaux</h3>
              <p>
                Suivez-nous sur Facebook et Instagram et découvrez en images les nouveautés et coulisses de la pâtisserie Gilles Marchal.
              </p>
              <div style={{ height: "50px" }} className="row"></div>
              <ul style={{
                    display: "grid",
                    rowGap: "40px",
                  }}
                  className="footer-social-links">
                <li>
                  <a
                    href="https://www.facebook.com/bolbol.bilel.5492"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-square"></i> Fleur D'Oranger sur Facebook
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://www.instagram.com/bilelganar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i> Fleur D'Oranger sur Instagram
                  </a>
                </li>
              </ul>
              </div>
            </section>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;