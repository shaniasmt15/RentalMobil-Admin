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
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Nama
            </label>
            <div class="col-sm-10">
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
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Harga
            </label>
            <div class="col-sm-10">
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
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Foto
            </label>
            <div class="col-sm-10">
              <div class="custom-file">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={(e) => {
                    setFileInput(e.target.files[0]);
                    inputCars.image = e.target.files[0];
                  }}
                  class="custom-file-input"
                  id="validatedCustomFile"
                  required
                />
                <div class="invalid-feedback">
                  Example invalid custom file feedback
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Kategori
            </label>
            <div class="col-sm-10">
              <div class="form-group">
                <select
                  class="custom-select"
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
                <div class="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary">cancel</button>
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

/**
 * <div class="form-group">
    <select class="custom-select" required>
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid custom select feedback</div>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="validatedCustomFile" required>
    <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div class="invalid-feedback">Example invalid custom file feedback</div>
  </div>
 */
