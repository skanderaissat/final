
import { getAllProducts } from '../../redux/actions/productAction';
import "../login-register/login.css";
import ListCardProducts from '../../components/cartProducts/listProducts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function Gateaux() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const gateauxProducts = products.filter(item => item.category === 'Gateaux');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">Fleur D'Oranger</a> &gt; <span className="post">Gateaux</span>
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
            Gateaux
          </h1>
          <div style={{ height: "30px" }} className="row"></div>
          <p>
            Ces jolis petits gâteaux se dégustent à n’importe quelle heure de la journée. Ils vous accompagneront lors de vos petits-déjeuners, goûters, cafés, pique-niques… Tous nos cakes sont confectionnés sur place dans notre atelier avec les plus beaux produits de saison… Qui plus est, nos cakes se conservent très bien et adorent voyager.
          </p>
        </div>
        <div style={{ height: "50px" }} className="row"></div>

        <div className="row">
           {gateauxProducts.map((item) => (
            <ListCardProducts key={item._id} item={item} />
          ))}
         
        </div>
      </div>
    </main>
  );
}

export default Gateaux;
