import React, { useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../Features/cars/car-slice";

import DataTable from "react-data-table-component";
import { Card } from "./Card";
import ReactPaginate from "react-paginate";

const AllCars = () => {
  const dispatch = useDispatch(); //ini fitur redux untuk memanggil action di dalam reducer / slice
  //set loading stop & loading start
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = useState(1);
  const { mobil } = useSelector((state) => state.car);
  const [category, setCategory] = useState("All");
  const [carShow, setCarShow] = useState([]);
  const { pageCount } = useSelector((state) => state.car);

  React.useEffect(() => {
    if (mobil && mobil !== null) {
      setTimeout(() => {
        setLoading(!loading);
      }, 1000);
    }
    if (category !== "All") {
      const newCars = mobil.filter((car) => car.category === category);
      setCarShow(newCars);
    } else {
      setCarShow(mobil);
    }
  }, [category, mobil]);

  useEffect(() => {
    dispatch(getAllCars({ page }));
  }, []);

  return (
    <>
      {/* <button>Get Data</button> */}
      {/* jika semua data langsung di fetch dalam 1 waktu */}
      <div class="input-group mb-3">
        <select
          class="custom-select"
          id="inputGroupSelect01"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="small">Small</option>
          <option value="4 - 6 orang">4 - 6 orang</option>
        </select>
      </div>
      {mobil &&
        carShow?.map((el) => {
          return <Card key={el.id} cars={el} />;
        })}
      <div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          // onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
      {/* jika api nya menerapkan pagination, berarti kita butuh handling tambahan untuk menghandle fetch API 
        berdasarkan pagination (jumlah pertampilan, jumlah skip)
        */}
    </>
  );
};

export default AllCars;
