import React from "react";
import images from ".././imgs/bio.jpg";
import image from ".././imgs/place.jpeg";
import imagepain from ".././imgs/pain.jpeg";
import imggateau from ".././imgs/gateau 6.jpeg";
import imgsalt from ".././imgs/salty 8.jpeg";
import imgbeg from ".././imgs/horiz.jpg";
import imagegour from ".././imgs/croissant 3.jpeg";
import imghlou from ".././imgs/hlou arbi 1.jpeg";
import "./Hoome.css";
function home() {
  return (
    <>
      <div className="">
        <img width="1320" height="500" className="" alt="" src={imgbeg} />
      </div>
      <div
        className="block text-center"
        style={{
          paddingTop: "78px",
          paddingRight: "10px",
          paddingBottom: "10px",
          paddingLeft: "30px",
        }}
      >
        <div className="row">
          <div
            className="row"
            style={{
              paddingRight: "100px",
              paddingLeft: "100px",
            }}
          >
            <div className="col">
              <h1 className="row">
                BILEL GANNAR, UN ARTISAN QUI VOUS TRANSPORTE VERS L’ENFANCE
              </h1>
              <div style={{ height: "20px" }} className="row"></div>
              <p className="row">
                Bilel est un passionné de pâtisserie et de cuisine qui fait
                vibrer les papilles de tous ceux qui croisent son chemin. Ses
                créations délicieuses et son talent inné lui permettent de
                transmettre la joie à travers ses desserts exquis. Sa passion
                pour la nourriture est contagieuse, et il fait preuve d'un amour
                sincère pour chaque plat qu'il prépare. Grâce à son savoir-faire
                et à sa créativité, Bilel fait rayonner la gastronomie, offrant
                à chacun une expérience gustative mémorable et le bonheur à
                chaque bouchée.". À 16 ans, devenir pâtissier lui apparaît comme
                une évidence : il décide d’entrer en apprentissage pour élargir
                ses connaissances sur tout ce qui touche à l'art culinaire.
              </p>
              <div className="col"></div>
              <div style={{ height: "20px" }} className=""></div>
            </div>

            <figure
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="col"
            >
              <img
                width="400"
                height="400"
                src={images}
                alt="Bilel Gannar"
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </figure>
          </div>
        </div>
      </div>
      {/* <div>bio</div> */}
      <div
        className=" text-center"
        style={{
          paddingTop: "50px",
          paddingRight: "30px",
          paddingBottom: "80px",
          paddingLeft: "30px",
        }}
      >
        <div style={{
              paddingRight: "100px",
              paddingLeft: "100px",
            }} className="row">
          <div className="row">
            <figure className="col">
              <a
                href="https://goo.gl/maps/gCJVF8tikz2apBMR7"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  width="400"
                  height="400"
                  src={image}
                  alt="La pâtisserie Fleur D'oranger, située à Nabeul."
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </a>
            </figure>
            <div className="col">
              <h2 className="row">
                INSTALLÉ AU COEUR DE NABEUL, HAUT LIEU DE CRÉATION ARTISTIQUE
              </h2>
              <div style={{ height: "20px" }} className="row"></div>
              <p>
                Après avoir travaillé pendant plus de 7 ans et acquis autant
                d'expérience que possible, il décide d'ouvrir sa propre
                pâtisserie, Bilel Gannar s’installe dans le centre de Nabeul.
                C’est là, dans ce Nabeul enchanté par un esprit de village, une
                ville privilégiée où l’on prend le temps de vivre et de se
                connaître, qu’il trouve l’inspiration et le bonheur d’exercer
                pleinement son métier.
              </p>
              <div style={{ height: "20px" }} className="row"></div>
              <div className="row">
                <div style={{ position: "relative", right: "170px" }}>
                  <a
                    className="btn btn-success"
                    href="https://goo.gl/maps/gCJVF8tikz2apBMR7"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Se rendre à la boutique
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>location</div> */}
      <div className="p-3 mb-2 bg-light text-dark  ">
        <div classname="row" style={{ height: "50px" }}></div>
        <div>
          <h2
            className="row"
            style={{
              fontSize: "24px",
              lineHeight: "28.8px",
              textAlign: "center",
              letterSpacing: "1px",
              position: "relative",
              left: "350px",
            }}
          >
            DES PRODUITS DE QUALITÉ ULTRA FRAIS
          </h2>
        </div>

        <div>
          <p className="row" style={{ position: "relative", left: "440px" }}>
            Confectionnés et cuits sur place plusieurs fois par jour
          </p>
        </div>
        <div classname="row" style={{ height: "30px" }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row">
            <div className="col">
              <div className="row">
                <figure className="aligncenter size-medium">
                  <a href="/Pains">
                    <img
                      width="180"
                      height="180"
                      src={imagepain}
                      alt=""
                      className="border"
                    />
                  </a>
                </figure>
              </div>
              <h3 className="row">
                <a
                  href="/Cakes"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    color: "#222222",
                    backgroundColor: "#f4f5f7",
                  }}
                >
                  PAINS
                </a>
              </h3>
            </div>
            <div className="col">
              <div className="row">
                <figure className="aligncenter size-medium">
                  <a href="/Gateaux">
                    <img
                      width="180"
                      height="180"
                      src={imggateau}
                      alt=""
                      className="border"
                    />
                  </a>
                </figure>
              </div>
              <h3 className="row">
                <a
                  href="/Gateaux"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    color: "#222222",
                    backgroundColor: "#f4f5f7",
                  }}
                >
                  GATEAUX
                </a>
              </h3>
            </div>
            <div className="col">
              <div className="row">
                <figure className="aligncenter size-medium">
                  <a href="/Salé">
                    <img
                      width="180"
                      height="180"
                      src={imgsalt}
                      alt=""
                      className="border"
                    />
                  </a>
                </figure>
              </div>
              <h3 className="row">
                <a
                  href="/Salé"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    color: "#222222",
                    backgroundColor: "#f4f5f7",
                  }}
                >
                  SALÉ
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="row">
            <div className="col">
              <div className="row">
                <figure className="aligncenter size-medium">
                  <a href="/Gourmandise">
                    <img
                      width="180"
                      height="180"
                      src={imagegour}
                      alt=""
                      className="border"
                    />
                  </a>
                </figure>
              </div>
              <h3 className="row">
                <a
                  href="/Gourmandise"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    color: "#222222",
                    backgroundColor: "#f4f5f7",
                  }}
                >
                  GOURMANDISES
                </a>
              </h3>
            </div>
            <div className="col"></div>
            <div className="col">
              <div className="row">
                <figure className="aligncenter size-medium">
                  <a href="/HlouTounsi">
                    <img
                      width="180"
                      height="180"
                      src={imghlou}
                      alt=""
                      className="border"
                    />
                  </a>
                </figure>
              </div>
              <h3 className="row">
                <a
                  href="/HlouTounsi"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    letterSpacing: "1px",
                    color: "#222222",
                    backgroundColor: "#f4f5f7",
                  }}
                >
                  HLOU TOUNSI
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* <div>mlkhr</div> */}
      <div
        className="p-3 mb-2 bg-warning-subtle text-emphasis-warning "
        style={{
          paddingTop: "80px",
          paddingRight: "30px",
          paddingBottom: "80px",
          paddingLeft: "30px",
        }}
      >
        <div classname="row" style={{ height: "50px" }}></div>
        <div className="row">
          <div className="col ">
            <h2
              className="row"
              style={{
                fontSize: "24px",
                lineHeight: "28.8px",
                textAlign: "center",
                letterSpacing: "1px",
                position: "relative",
                left: "390px",
              }}
            >
              UNE NOUVELLE BOUTIQUE EN LIGNE
            </h2>
            <p className="row" style={{ position: "relative", left: "440px" }}>
              Pour mieux vous servir et répondre à vos attentes
            </p>
          </div>
          <div classname="row" style={{ height: "70px" }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "space-between ",
              paddingRight: "60px",
              paddingLeft: "60px",
            }}
          >
            <div
              className="col-3 p-3 mb-2 bg-white text-dark"
              style={{ height: "250px", padding: "400px" }}
            >
              <div
                className=""
                style={{
                  paddingTop: "50px",
                  paddingRight: "26px",
                  paddingBottom: "50px",
                  paddingLeft: "26px",
                  textAlign: "center",
                }}
              >
                <h3
                  className="row"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    position: "relative",
                    left: "80px",
                  }}
                >
                  Click &amp; collect
                </h3>
                <div classname="row" style={{ height: "10px" }}></div>

                <p
                  className="row"
                  style={{
                    color: "#222222",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Commandez en ligne avant 17h et retirez retirez vos articles
                  en magasin le lendemain à partir de 9h – sauf lundis et
                  mardis, jours de fermeture de notre boutique.
                </p>
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div
              className="col-3 p-3 mb-2 bg-white text-dark"
              style={{ height: "250px", padding: "400px" }}
            >
              <div
                className=""
                style={{
                  paddingTop: "50px",
                  paddingRight: "26px",
                  paddingBottom: "50px",
                  paddingLeft: "26px",
                  textAlign: "center",
                }}
              >
                <h3
                  className="row"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    position: "relative",
                    left: "80px",
                  }}
                >
                  Paiement sécurisé
                </h3>
                <div classname="row" style={{ height: "10px" }}></div>
                <p
                  style={{
                    color: "#222222",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Réglez facilement vos achats avec votre CB Visa ou Mastercard.
                  Toutes les transactions sont sécurisées grâce à la plateforme
                  de notre partenaire bancaire.
                </p>
              </div>
            </div>
            <div className="col-sm-1"></div>
            <div
              className="col-3 p-3 mb-2 bg-white text-dark"
              style={{ height: "250px", padding: "400px" }}
            >
              <div
                className=""
                style={{
                  paddingTop: "50px",
                  paddingRight: "26px",
                  paddingBottom: "50px",
                  paddingLeft: "26px",
                  textAlign: "center",
                }}
              >
                <h3
                  className="row"
                  style={{
                    fontSize: "11px",
                    lineHeight: "13.2px",
                    textAlign: "center",
                    position: "relative",
                    left: "80px",
                  }}
                >
                  On vous conseille
                </h3>
                <div classname="row" style={{ height: "10px" }}></div>
                <p
                  className="row"
                  style={{
                    color: "#222222",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  Vous avez une question sur un produit ? N’hésitez pas à nous
                  joindre par e-mail ou par téléphone au 53186660 Nous serons
                  ravis de pouvoir vous renseigner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default home;
