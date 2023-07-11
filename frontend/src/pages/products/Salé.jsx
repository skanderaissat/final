
import "../login-register/login.css";
import ListCardProducts from '../../components/cartProducts/listProducts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';

function Salé() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const SaléProducts = products.filter(item => item.category === 'Salé');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">Fleur D'Oranger</a> &gt; <span className="post">Salé</span>
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
            Salé
          </h1>
          <div style={{ height: "30px" }} className="row"></div>
          <p>
            Les mets salés sont une véritable explosion de saveurs qui raviront vos papilles à tout moment de la journée. Dégustez-les lors de vos déjeuners raffinés, vos dîners conviviaux ou même pour combler une petite faim gourmande. Chaque création salée est méticuleusement élaborée dans notre cuisine avec une sélection minutieuse des ingrédients les plus fins et frais. Laissez-vous séduire par notre passion pour la cuisine salée et profitez de ces délices qui vous transporteront vers de nouvelles sensations gustatives.
          </p>
        </div>
        <div style={{ height: "50px" }} className="row"></div>

        <div className="row">
        {SaléProducts.map((item) => (
            <ListCardProducts key={item._id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Salé;