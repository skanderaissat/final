import React from "react";
import "./adminLists.css";
import { Button } from "react-bootstrap";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";

function AdminLists() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersList = () => {
    dispatch(getAllUsers());
    navigate("/admin/userslist");
  };
  return (
    <>
      <Header />
      <div className="ad">
        <div className="bt">
          <Button className="bt1" onClick={usersList}>
            liste des utilisateurs
          </Button>

          <Link to="/admin/productslist">
            <Button className="bt2">liste des produits</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLists;
