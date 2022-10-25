import React, { useEffect, useMemo, useState } from "react";
import "./AllCars.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../Features/cars/car-slice";
import { Pagination } from "@mui/material";
import DataTable from "react-data-table-component";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";

const AllCars = () => {
  const dispatch = useDispatch(); //ini fitur redux untuk memanggil action di dalam reducer / slice
  //set loading stop & loading start
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("All");
  const [carShow, setCarShow] = useState([]);
  const { pageCount, count, mobil } = useSelector((state) => state.car);
 
  useEffect(() => {
    dispatch(getAllCars({ page }));
  }, [page]);
 
  let val
  const tesRadio = (e) => {
    val = e.target.value
    setCategory(e.target.value)
    if (val !== "All") {
      const newCars = mobil?.filter((car) => car.category === val);
      setCarShow(newCars);
    } else {
      setCarShow(mobil);
    }
  }

  console.log(val, 'val')
  
  React.useEffect(() => {
    if (mobil && mobil !== null) {
      setTimeout(() => {
        setLoading(!loading);
      }, 1000);
    }
  }, [carShow, mobil]);


  const handlePageChange = (event, value) => {
    setPage(value);
    dispatch(getAllCars({ page: value }));
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <div>Halaman All Cars</div>
        <button
          className="btn btn-primary mb-3"
          onClick={() => navigate("add")}
        >
          Add New Car
        </button>
      </div>
      <div className=" input-group mb-3">
        <div className="option" onChange={(e) => {
          tesRadio(e)
          // setCategory(e.target.value)
        }} > 
          <input
            type="radio"
            className="btn-check"
            value='All'
            name="category"
            id="option1"
            // autocomplete="off"
            // checked
          />
          <label class="btn btn-secondary" for="option1">
            All
          </label>
          <input
            type="radio"
            class="btn-check"
            value='large'
            name="category"
            id="option2"
            // autocomplete="off"
            // checked
          />
          <label class="btn btn-secondary option22" for="option2">
            Large
          </label>
          <input
            type="radio"
            class="btn-check"
            value='medium'
            name="category"
            id="option3"
            // autocomplete="off"
            // checked
          />
          <label class="btn btn-secondary option33" for="option3">
            Medium
          </label>
          <input
            type="radio"
            class="btn-check"
            value='small'
            name="category"
            id="option4"
            // autocomplete="off"
            // checked
          />
          <label class="btn btn-secondary option44" for="option4">
            Small
          </label>
          <input
            type="radio"
            class="btn-check"
            value='4 - 6 orang'
            name="category"
            id="option5"
            // autocomplete="off"
            // checked
          />
          <label class="btn btn-secondary option5" for="option5">
            4 - 6 People
          </label>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        {
          carShow.length <= 9 || carShow.length >=11 ? carShow?.map((el) => {
            return <Card key={el.id} cars={el} page={page} />;
          }) : mobil?.map((el) => {
            return <Card key={el.id} cars={el} page={page} />;
          })
        }
        {/* {carShow &&
          // carShow?.map((el) => {
          //   return <Card key={el.id} cars={el} page={page} />;
          // })
        } */}
      </div>
      <div>
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      {/* jika api nya menerapkan pagination, berarti kita butuh handling tambahan untuk menghandle fetch API 
        berdasarkan pagination (jumlah pertampilan, jumlah skip)
        */}
    </>
  );
};

export default AllCars;
