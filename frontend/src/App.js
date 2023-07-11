import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Salé from "./pages/products/Salé";
import Panier from "./pages/panier";
import Gourmandise from "./pages/products/Gourmandise";
import Gateaux from "./pages/products/Gateaux";
import Pains from "./pages/products/Pain";
import Header from "./components/header/header";
import HlouTounsi from "./pages/products/HlouTounsi";
import Footer from "./components/footer/Footer";
import Login from "./pages/login-register/login.jsx";
import ErrorPage from "./pages/404/erreur"
import AdminLists from "./pages/Admin/adminList/adminLists";
import ProductsList from "./pages/Admin/productlist/ProductList";
import UsersList from "./pages/Admin/usersList/userslist";
import Register from "./pages/login-register/register";
import Profile from "./pages/profile/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/authAction";
import { getAllProducts } from "./redux/actions/productAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
      dispatch(getAllProducts());
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <div classname="container" style={{ overflow: "hidden" }}>
          <Header />
          <Routes>
          <Route path="/404" element={<ErrorPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AdminLists" element={<AdminLists />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ProductsList" element={<ProductsList />} />
            <Route path="/UsersList" element={<UsersList />} />
            <Route path="/Salé" element={<Salé />} />
            <Route path="/Panier" element={<Panier />} />
            <Route path="/Gourmandise" element={<Gourmandise />} />
            <Route path="/gateaux" element={<Gateaux />} />
            <Route path="/Pains" element={<Pains />} />
            <Route path="/HlouTounsi" element={<HlouTounsi />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
