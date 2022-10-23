import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCars } from "../Features/cars/car-slice";

export const Card = ({ cars }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteCars(id))
  };

  const rupiahFormat = (num) => {
    let reverse = num.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);

    ribuan = ribuan.join(".").split("").reverse().join("");

    return "Rp." + ribuan;
  };

  return (
    <div className="card" style={{ width: "18rem;" }}>
      <img
        className="card-img-top"
        src={cars?.image}
        alt="Card image cap"
        style={{ width: "194px", height: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{cars?.name}</h5>
        <h3>{rupiahFormat(cars?.price)} / hari</h3>
        <h5>{cars?.category}</h5>
        <h5>{cars?.updatedAt}</h5>

        <div className="d-flex justify-content-around">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(cars?.id)}
          >
            Delete
          </button>
          <button className="btn btn-success" onClick={() => navigate("edit/" + cars?.id)}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
