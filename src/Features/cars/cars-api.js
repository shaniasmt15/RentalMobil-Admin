import axios from "axios";
import { getAuthHeader } from "../auth/accessTokenHeader";

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/admin/v2/";
// https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?page=1&pageSize=10

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NjQyNzY5N30.C3duOD7JKM_5hSTDTcmes69ftFjWRF7tszgdY2ZXjrg // accessToken

const getAllCars = async (page) => {
  // let code
  // if(code ) code = `name=${name}`
  // else code = `page=${page}&pageSize=10`
  const access_token = getAuthHeader();
  const response = await axios.get(`${API_URL}car?page=${page}&pageSize=10`, {
    headers: {
      "Content-Type": "multipart/form-data",
      access_token: access_token.access_token,
    },
  });
  if (response.status !== 200) {
  }
  return response;
};

const createCars = async (cars) => {
  const access_token = getAuthHeader();
  try {
    const { data } = await axios({
      method: "post",
      url: "https://bootcamp-rent-cars.herokuapp.com/admin/car",
      data: {
        name: cars.name,
        price: cars.price,
        image: cars.image,
        category: cars.category,
      },

      headers: {
        "Content-Type": "multipart/form-data",
        access_token: access_token.access_token,
      },
    });
    console.log(data, "<=== API");

    // if(data.status !== 200) return

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteCars = async (id) => {
  try {
    const { data } = await axios({
      method: "delete",
      url: "https://bootcamp-rent-cars.herokuapp.com/admin/car/" + id,
      headers: getAuthHeader(),
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const editCars = async (cars) => {
  const access_token = getAuthHeader();
  try {
    const { data } = await axios({
      method: "put",
      url: "https://bootcamp-rent-cars.herokuapp.com/admin/car/" + cars.id,
      data: {
        name: cars.name,
        price: cars.price,
        image: cars.image,
        category: cars.category,
      },
      headers: {
        "Content-Type": "multipart/form-data",
        access_token: access_token.access_token,
      },
    });

    console.log(data, "<== Edit caars");

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCarById = async (id) => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://bootcamp-rent-cars.herokuapp.com/admin/car/" + id,
      headers: getAuthHeader(),
    });

    // console.log(data, '<== Get by Id')

    return data;
  } catch (error) {
    console.log(error);
  }
};

const carsAPI = {
  getAllCars,
  createCars,
  deleteCars,
  editCars,
  getCarById,
};

export default carsAPI;
