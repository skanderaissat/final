
import "../login-register/login.css";
import ListCardProducts from '../../components/cartProducts/listProducts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';
function Gourmandise() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const GourmandiseProducts = products.filter(item => item.category === 'Gourmandise');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">Fleur D'Oranger</a> &gt; <span className="post ">Gourmandises</span>
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
            Gourmandise
          </h1>
          <div style={{ height: "30px" }} className="row"></div>
          <p>
            Les douceurs sucrées de la Tunisie sont une véritable invitation à la gourmandise. De la pâtisserie traditionnelle aux délices modernes, chaque bouchée est un voyage au pays des saveurs sucrées. Les pâtissiers tunisiens utilisent des ingrédients de qualité tels que les amandes, les pistaches, le miel et les dattes pour créer des desserts uniques et exquis. Laissez-vous séduire par les délicats makrouds, les doux bambalounis, les croustillantes cornes de gazelle ou les fondantes pâtisseries à base de miel et d'amandes. Chaque dessert est un chef-d'œuvre d'art culinaire, alliant textures et parfums pour éveiller vos sens et combler votre palais. Dégustez ces trésors sucrés lors de moments spéciaux ou offrez-les en cadeau à vos proches, et laissez la magie des desserts tunisiens enchanter votre quotidien.
          </p>
        </div>
        <div style={{ height: "50px" }} className="row"></div>

        <div className="row">
        {GourmandiseProducts.map((item) => (
            <ListCardProducts key={item._id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Gourmandise;