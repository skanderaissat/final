import React, { useEffect } from "react";
import "./liststyle.css";
import Cardproducts from "./cardProduct";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";

function ListCardProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const filter = useSelector((state) => state.productReducer.filter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="list1">
      {filter === "Gateaux"
        ? products
            .filter((product) => product.category === "Gateaux")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "Gourmandise"
        ? products
            .filter((product) => product.category === "Gourmandise")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "Hlou Tounsi"
        ? products
            .filter((product) => product.category === "Hlou Tounsi")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
            : filter === "Pains"
        ? products
            .filter((product) => product.category === "Pains")
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
            : filter === "Salé"
            ? products
                .filter((product) => product.category === "Salé")
                .map((product) => (
                  <Cardproducts product={product} key={product._id} />
                ))
        : filter === "All"
        ? products.map((product) => (
            <Cardproducts product={product} key={product._id} />
          ))
        : filter === "ASC"
        ? products
            .sort(function (a, b) {
              return a.prix - b.prix;
            })
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : filter === "DESC"
        ? products
            .sort(function (a, b) {
              return b.prix - a.prix;
            })
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))
        : products
            .filter((product) =>
              product.name.toLowerCase().includes(filter.toLowerCase().trim())
            )
            .map((product) => (
              <Cardproducts product={product} key={product._id} />
            ))}
    </div>
  );
}

export default ListCardProducts;