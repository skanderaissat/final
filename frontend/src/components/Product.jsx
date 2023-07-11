import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getOneProduct } from '../redux/actions/productAction';
//import { getAllComments } from '../redux/actions/commentAction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const Info = styled.div`
  padding: 16px;
  width: 100%;
  background-color: #f5fbfd;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = () => {
    dispatch(getOneProduct(item._id));
    //dispatch(getAllComments(item._id));
    navigate(`/product/${item._id}`);
  };
  
  return (
    <Container onClick={handleProductClick}>
      <Image src={item.photos} alt={item.nom} />
      <Info>
        <Title>{item.name}</Title>
        <ButtonContainer>
          <Button>
            <SearchIcon />
          </Button>
          <Button>
            <FavoriteBorderIcon />
          </Button>
          <Button>
            <ShoppingCartIcon />
          </Button>
        </ButtonContainer>
        <Price>{item.prix} Dt</Price>
      </Info>
    </Container>
  );
};

export default Product;