
import React from "react";
import "./prostyle.css";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, getOneProduct } from "../../redux/actions/productAction";
//import { getAllComments } from "../../redux/actions/commentAction";

const Cardproducts = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Card className="card1" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.photo}
          onClick={() => {
            dispatch(getOneProduct(product._id));
            //dispatch(getAllComments(product._id));
            navigate("/product");
          }}
        />

        <Card.Body>
          <Card.Title>{product.nom}</Card.Title>
          <Rating name="read-only" value={3} readOnly />
          <Card.Text>{product.prix} Dt</Card.Text>
          <Button
            onClick={() => {
              dispatch(addToCart(product._id));
            }}
            variant="primary"
          >
            Ajouter au Panier
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardproducts;