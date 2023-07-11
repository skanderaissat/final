import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/actions/authAction";

function AdminUser({ user }) {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user._id));
    }
  };

  return (
    <tbody>
      <tr>
        <th scope="row">{user._id}</th>
        <td>{user.nom}</td>
        <td>{user.prénom}</td>
        <td>{user.email}</td>
        <td>
          <Button onClick={handleDeleteUser}>
            <i className="far fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default AdminUser;