import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'));

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/admin";


const getAllOrder = ({currentPage}) => {
    const response = axios.get(`${API_URL}/v2/order?page=${currentPage}`, {
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    });
    return response;
}

const updateOrder = id => {
    const response = axios.patch(`${API_URL}/order/${id}`, {
        status: 1
    }, {
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    })
    return response
}

const getOrderReport = ({from, until}) => {
    const response = axios.get(`${API_URL}/order/reports?from=${from}&until=${until}`, {
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    })
    return response
}


const orderAPI = {
    getAllOrder,
    updateOrder,
    getOrderReport
};

export default orderAPI;