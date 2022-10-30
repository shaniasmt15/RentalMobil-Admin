import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderBarChart from '../Component/OrderBarChart/OrderBarChart';
import OrderTable from '../Component/OrderTable/OrderTable'

function Dashboard() {
    const {isLoggedIn} = useSelector(state => {return state.auth})
    const navigate = useNavigate();

    useEffect(() => {
        !isLoggedIn && navigate('/login');
    },[])

    return (
        <Fragment>
            <OrderBarChart />
            <OrderTable />
        </Fragment>
    )
}

export default Dashboard;