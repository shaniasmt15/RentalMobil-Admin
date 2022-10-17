import axios from 'axios';
import {getAuthHeader} from '../auth/accessTokenHeader';

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/admin/v2/";


const getAllCars = async () => {
    const response = await axios.get(`${API_URL}car`, {header, getAuthHeader() });
    console.log(response);
    if(response.status!==200){}
    return response;
};

// const getCarById = () => {

// }

const carsAPI = {
    getAllCars,
    // getCarById
}

export default carsAPI