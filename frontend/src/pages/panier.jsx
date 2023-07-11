import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartShop from '../components/cartShop';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;




const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SummaryTitle = styled.h2`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Panier = () => {
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();
  const cart = useSelector((state) => state.productReducer.cart);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => (price += item.qty * item.prix));
    setSubTotalPrice(price);
    let total = price + price * 0.19;
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  return (
    <main className="p-3 mb-2 bg-body-secondary">
      <div className="container">
        <div className="breadcrumb">
          <a href="/home" className="home">
            Fleur D'Oranger
          </a>{' '}
          &gt; <span className="post ">Mon panier</span>
        </div>

        <div className="">
          <h1
            style={{
              fontSize: '24px',
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 500,
              lineHeight: 1.2,
              marginTop: '20px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Mon panier
          </h1>
        </div>

        <Wrapper>
          
          <div>
            <Button className="btn btn-success" variant="primary" onClick={() => navigate('/home')}>
            encore affamé(e) !
            </Button>
            </div>
          
          <div>
            <Info>
              {cart.map((item) => (
                <CartShop key={item._id} itemProduct={item} />
              ))}
            </Info>
            <Summary>
              <SummaryTitle>récapitulatif de la commande</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>DT {subTotalPrice}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>TVA%</SummaryItemText>
                <SummaryItemPrice>19%</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem >
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>DT {totalPrice}</SummaryItemPrice>
              </SummaryItem>
              <Button className="btn btn-success" style={{position: "relative", left: "60px" }}>vérifier votre commande</Button>
            </Summary>
            </div>
        </Wrapper>
      </div>
    </main>
  );
};

export default Panier;