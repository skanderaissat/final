import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://th.bing.com/th/id/OIP.2oMCNeriP8cjix5BawN-mgHaEo?pid=ImgDet&rs=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 100px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prénom: "",
    email: "",
    adresse: "",
    ville: "",
    NumeroDeTelephone: "",
    motDePasse: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(formData, navigate));
    navigate("/Profile"); // Navigate to the profile page after successful registration
  };

  return (
    <Container>
      <Wrapper>
        <Title>Créer un compte</Title>
        <Form onSubmit={handleSubmit}>
          <Input name="prénom" placeholder="Prénom" onChange={handleChange} />
          <Input name="nom" placeholder="Nom" onChange={handleChange} />
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input
            name="adresse"
            type="text"
            placeholder="Adresse"
            onChange={handleChange}
          />
          <Input
            name="ville"
            type="text"
            placeholder="Ville"
            onChange={handleChange}
          />
          <Input
            name="NumeroDeTelephone"
            type="tel"
            placeholder="Numéro de téléphone"
            onChange={handleChange}
          />
          <Input
            name="motDePasse"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
          />
          <Button type="submit" className="btn btn-success">
            S'inscrire
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;