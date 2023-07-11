import "./profile.css";
import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.authReducer.user);

  if (!user || user.photos === null) {
    return null; // Return null or display a loading state until user data is available
  }

  return (
    <div>
      <div className="prof">
        <div>
          <img
            className="pict"
            src={
              user.photos
                ? `uploads/${user.photos}`
                : "https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png"
            }
            width="400px"
            height="400px"
            alt="pictureprofile"
          />
        </div>
        <div className="info">
          <h3>prénom</h3>
          <p>{user.prénom}</p>
          <h3> nom</h3>
          <p>{user.nom}</p>
          <h3>Email</h3>
          <p>{user.nom}</p>
          <h3>adresse</h3>
          <p>{user.adresse}</p>
          <h3>ville</h3>
          <p>{user.ville}</p>
          <h3>Numero De Telephone</h3>
          <p>{user.NumeroDeTelephone}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
