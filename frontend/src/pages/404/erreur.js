import React from "react";
import "./erreur.css";

function ErorrPage() {
  return (
    <div className="err">
      <h2 className="title">404</h2>
      <p className="lol">Oops! Quelque chose ne va pas.</p>
      <a href="/home" className="button">
        <i className="fas fa-home"></i> Retourner à la page initiale.
      </a>
    </div>
  );
}

export default ErorrPage;
