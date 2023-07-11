import React, { useEffect } from "react";
import "./userlist.css";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/Footer";
import AdminUser from "./adminUsers";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions/authAction";

function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.authReducer.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <table className="table1">
        <thead className="thead1">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {users.map((user) => (
          <AdminUser key={user._id} user={user} />
        ))}
      </table>
      <Footer />
    </div>
  );
}

export default UsersList;
