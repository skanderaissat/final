import "../login-register/login.css";
import ListCardProducts from '../../components/cartProducts/listProducts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';

function Pain() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const PainsProducts = products.filter(item => item.category === 'Pain');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">Fleur D'Oranger</a> &gt; <span className="post">Pains</span>
        </div>

        <div className="">
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
            Pain
          </h1>
          <div style={{ height: "30px" }} className="row"></div>
          <p>
            Nos savoureux pains accompagnent tous vos repas, des petits-déjeuners aux dîners. Préparés avec soin dans notre boulangerie, ils délivrent une expérience gustative exceptionnelle avec des ingrédients de qualité. Leurs arômes saisonniers enchantent vos papilles. Parfaits pour les voyages gourmands, nos pains sont prêts à être dégustées partout.
          </p>
        </div>
        <div style={{ height: "50px" }} className="row"></div>

        <div className="row">
        {PainsProducts.map((item) => (
            <ListCardProducts key={item._id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Pain;