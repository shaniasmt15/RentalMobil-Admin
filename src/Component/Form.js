import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getAllCars,
  getById,
  postCars,
  updateCars,
} from "../Features/cars/car-slice";
import Swal from "sweetalert2";

export const Form = ({ page, id }) => {
  const [inputCars, setInputCars] = useState({
    name: "",
    price: "",
    image: null,
    category: "",
    id: "",
  });

  const dispatch = useDispatch();

  const [fileInput, setFileInput] = useState(null);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputCars({ ...inputCars, [name]: value });
  };

  // add cars
  const createHandler = (e) => {
    e.preventDefault();

    dispatch(postCars(inputCars)).then(() => {
      Swal.fire("Success", "Success create new Cars!", "success");
      navigate("/");
      dispatch(getAllCars({ page }));
    });
  };

  console.log(fileInput?.name)
  useEffect(() => {
    if (id) {
      dispatch(getById(id)).then((res) => {
        setInputCars({
          name: res.payload?.name,
          price: res.payload?.price,
          image: res.payload?.image,
          category: res.payload?.category,
          id,
        });
      });
    }
  }, [id]);

  console.log(page, 'FORM')

  // update cars
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCars(inputCars, id)).then(() => {
      Swal.fire("Success", "Success Update Cars!", "success");
      navigate("/");
      dispatch(getAllCars({ page }));
    });
  };
  return (
    <>
      <div className="row mb-3">
        <form onSubmit={page === "/add" ? createHandler : updateHandler}>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Nama
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="name"
                value={inputCars.name}
                onChange={onChange}
                className="form-control"
                id="inputEmail3"
                placeholder="Input Nama / Tipe Mobil"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Harga
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                name="price"
                value={inputCars.price}
                onChange={onChange}
                className="form-control"
                id="inputPassword3"
                placeholder="Input Harga Sewa Mobil"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Foto
            </label>
            <div className="col-sm-10">
              <div className="custom-file">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) => {
                    setFileInput(e.target.files[0]);
                    inputCars.image = e.target.files[0];
                  }}
                  className="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <div className="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Kategori
            </label>
            <div className="col-sm-10">
              <div className="form-group">
                <select
                  className="custom-select"
                  name="category"
                  value={inputCars.category}
                  onChange={onChange}
                  required
                >
                  <option value="">Open this select menu</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="4 - 6 orang">4 - 6 orang</option>
                </select>
                <div className="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={()=>navigate('/')}>cancel</button>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};
