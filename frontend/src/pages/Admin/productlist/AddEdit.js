import React, { useEffect } from "react";
import "./addedit.css";
import Header from "../../../components/header/header";
import { Form, Button } from "react-bootstrap";
import Footer from "../../../components/footer/Footer";
import { addProduct, editProduct } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddEdit() {
  const productEdit = useSelector((state) => state.productReducer.product);
  const edit = useSelector((state) => state.productReducer.edit);
  const loading = useSelector((state) => state.productReducer.loading);
  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    prix: null,
    photos: "",
    categories: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handelChange
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.nom]: e.target.value });
  };
  // handelSubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData, navigate));
  };
  //handelEdit
  const handelEdit = (e) => {
    e.preventDefault();
    dispatch(editProduct(productEdit._id, formData));
    navigate("/admin/productslist");
  };
  useEffect(() => {
    edit
      ? setFormData({
          nom: productEdit.nom,
          description: productEdit.description,
          prix: productEdit.prix,
          photos: productEdit.photos,
          categories: productEdit.categories,
        })
      : setFormData({
          name: "",
          description: "",
          prix: null,
          photos: "",
          categories: "",
        });
  }, [
    edit,
    productEdit.photos,
    productEdit.prix,
    productEdit.description,
    productEdit.nom,
    productEdit.categories,
  ]);

  return (
    <>
     
      <Header />
      {edit && !loading ? (
        <div>
          <Form className="form" onSubmit={handelEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nom</Form.Label>
              <Form.Control
                type="Text"
                name="nom"
                placeholder="Enter name"
                value={formData.nom}
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Your description"
                value={formData.description}
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="Number"
                name="prix"
                placeholder="Price"
                value={formData.prix}
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>photos</Form.Label>
              <Form.Control
                type="String"
                name="photos"
                placeholder="Picture"
                value={formData.photos}
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>categories</Form.Label>
              <Form.Control
                type="Text"
                name="category"
                placeholder="Category"
                value={formData.categories}
                onChange={handelChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit Product
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <Form className="form" onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nom</Form.Label>
              <Form.Control
                type="Text"
                name="nom"
                placeholder="Enter name"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Your description"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="Number"
                name="prix"
                placeholder="Price"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="String"
                name="photos"
                placeholder="Picture"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>categories</Form.Label>
              <Form.Control
                type="Text"
                name="categories"
                placeholder="Category"
                onChange={handelChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </div>
      )}
     <Footer />
    </>
  );
}

export default AddEdit;