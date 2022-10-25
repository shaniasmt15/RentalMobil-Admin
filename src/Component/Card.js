import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMessage } from "../Features/auth/message-slice";
import { deleteCars, getAllCars } from "../Features/cars/car-slice";
import { DeletePopup } from "./DeletePopup";
import Swal from "sweetalert2";

export const Card = ({ cars, page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

 

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCars(id))
         .then(() => {
           Swal.fire(
             'Deleted!',
             'Your file has been deleted.',
             'success'
           )
           dispatch(getAllCars({page}))
         })
      }
    })
    
  };

  const rupiahFormat = (num) => {
    let reverse = num?.toString().split("").reverse().join(""),
      ribuan = reverse.match(/\d{1,3}/g);

    ribuan = ribuan.join(".").split("").reverse().join("");

    return "Rp." + ribuan;
  };

  return (
    <>
      <div class="col">
        {successMessage && (
          <div class="alert alert-primary" role="alert">
            {successMessage}
          </div>
        )}
        <div class="card h-100">
          <img
            className="card-img-top"
            src={cars?.image}
            // style={{ width: "200px", height: "300px" }}
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{cars?.name}</h5>
            <h3>{rupiahFormat(cars?.price)} / hari</h3>
            <h5>{cars?.category}</h5>
            <h5>{cars?.updatedAt}</h5>
          </div>
          <div className="d-flex justify-content-around py-2">
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(cars?.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-success"
              onClick={() => navigate("edit/" + cars?.id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};
