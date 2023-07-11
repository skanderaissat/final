
import "../login-register/login.css";
import ListCardProducts from '../../components/cartProducts/listProducts';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';

function HlouTounsi() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const HlouTounsiProducts = products.filter(item => item.category === 'HlouTounsi');

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">Fleur D'Oranger</a> &gt; <span className="post">Hlou Tounsi</span>
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
            Hlou Tounsi
          </h1>
          <div style={{ height: "30px" }} className="row"></div>
          <p>
            Samsa aux amandes, makroud, ghraiba, baklava, zlabia, kaak warka... Les gourmandises tunisiennes vous transportent instantanément vers les saveurs envoûtantes du pays. Ces délices sucrés partagent avec nos pâtisseries régionales une passion pour la gourmandise et une histoire profondément enracinée dans la tradition culinaire tunisienne. Inspirées par les recettes transmises de génération en génération, ces douceurs sont confectionnées avec amour et dévouement dans notre atelier. Découvrez la richesse des saveurs tunisiennes et laissez-vous séduire par le pur bonheur de déguster ces trésors sucrés, tout en rendant hommage aux pâtissiers et boulangers tunisiens qui perpétuent ces spécialités avec passion et savoir-faire.
          </p>
        </div>
        <div style={{ height: "50px" }} className="row"></div>

        <div className="row">
        {HlouTounsiProducts.map((item) => (
            <ListCardProducts key={item._id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default HlouTounsi;