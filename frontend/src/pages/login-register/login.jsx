import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import { login } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", motDePasse: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData, navigate));
    navigate("/Profile");
  };

  return (
    <div className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="breadcrumb">
              <a href="/home" className="home">
                Fleur D'Oranger
              </a>{" "}
              &gt; <span className="post ">Mon compte</span>
            </div>

            <div className="row">
              <div className="col">
                <h1
                  style={{
                    fontSize: "24px",
                    fontFamily: "'Work Sans', sans-serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    marginTop: "20px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Mon compte
                </h1>

                <div>
                  <h2
                    style={{
                      // Apply the desired CSS styles
                      fontSize: "24px",
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      marginTop: "50px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Connexion
                  </h2>
                  <div style={{ height: "10px" }} className=""></div>
                  <Form className="login-form " onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                      <Form.Label>e-mail*</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        name="email" // Update name attribute to "email"
                        autoComplete="username"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Mot de passe*</Form.Label>
                      <Form.Control
                        type="password"
                        className="form-control"
                        name="motDePasse" // Update name attribute to "motDePasse"
                        autoComplete="current-password"
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <div style={{ height: "10px" }} className=""></div>
                    <div>
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-success"
                      >
                        Identification
                      </Button>
                    </div>
                    <div style={{ height: "10px" }} className=""></div>
                    <div className="row">
                      <Link to="/register">
                        <Button
                          variant="primary"
                          type="submit"
                          className="btn btn-success"
                        >
                          créer un compte
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </div>

                <div style={{ height: "60px" }} className=""></div>
                <div className="">
                  <h2
                    style={{
                      // Apply the desired CSS styles
                      fontSize: "24px",
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      marginTop: "20px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Création d’un compte
                  </h2>
                  <div style={{ height: "15px" }} className=""></div>
                  <p
                    className="fw-light"
                    style={{
                      fontSize: "15px",
                      lineHeight: "24.375px",
                      textAlign: "start",
                      letterSpacing: "normal",
                    }}
                  >
                    La création d’un compte client se fait automatiquement dès
                    lors que vous passez votre première commande sur notre
                    boutique en ligne.
                  </p>
                  <div style={{ height: "30px" }}></div>
                  <p className="fw-light">
                    N’attendez plus et découvrez vite nos différentes rubriques:
                  </p>
                  <div style={{ height: "15px" }}></div>

                  <ul
                    style={{
                      display: "grid",
                      rowGap: "10px",
                    }}
                  >
                    <li className="row">
                      <a
                        href="/gateaux"
                        style={{
                          color: "#b2d260",
                          textDecoration: "none",
                        }}
                      >
                        Gateaux
                      </a>
                    </li>
                    <li className="row">
                      <a
                        href="/Gourmandise"
                        style={{
                          color: "#b2d260",
                          textDecoration: "none",
                        }}
                      >
                        Gourmandise
                      </a>
                    </li>
                    <li className="row">
                      <a
                        href="/Pains"
                        style={{
                          color: "#b2d260",
                          textDecoration: "none",
                        }}
                      >
                        Pains
                      </a>
                    </li>
                    <li className="row">
                      <a
                        href="/HlouTounsi"
                        style={{
                          color: "#b2d260",
                          textDecoration: "none",
                        }}
                      >
                        Hlou Tounsi
                      </a>
                    </li>
                    <li className="row">
                      <a
                        href="Salé"
                        style={{
                          color: "#b2d260",
                          textDecoration: "none",
                        }}
                      >
                        Salé
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
