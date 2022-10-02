import axios from "axios"

const API_URL = 'https://bootcamp-rent-car.herokuapp.com/admin/auth/'

export const login = ({email, password}) => {
    return axios.post(`${API_URL}login`, {email, password})
    .then((res) => {
        if (res.data.access_token) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data
    });
}

export const logout = () => {
    localStorage.removeItem('user');
}

const authAPI = {
    login,
    logout
}

export default authAPI;

