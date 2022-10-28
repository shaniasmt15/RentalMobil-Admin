import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../Features/order/order-slice';

function OrderTable() {
    const dispatch = useDispatch();
    const orders = useSelector(state => {return state.order.orderList});
    const [currentPage, setCurrentPage] = useState(1);


    const columns = [
        {
            name: 'User',
            selector: row => row.User.email,
            sortable: true,
        },
        {
            name: 'Car',
            selector: row => row.CarId,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => `Rp. ${row.total_price.toLocaleString('en-US')}`,
            sortable: true,
        },
        {
            name: 'Start Rent',
            selector: row => row.start_rent_at.slice(0,10),
            sortable: true,
        },
        {
            name: 'Finish Rent',
            selector: row => row.finish_rent_at.slice(0,10),
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status === false? 'Belum dibayar' : 'Sudah dibayar',
        },
        
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#CFD4ED;'
            }
        },
        rows: {
            style: {
                borderBottom: '1px solid #E5E5E5',
                borderInline: '1px solid #E5E5E5'
            }
        },
    }

    useEffect(() => {
        dispatch(getAllOrder({currentPage}));
    }, [currentPage])


    return (
        <div className="container">
            <h1 className='my-3' style={{fontSize: '24px'}}>Dashboard</h1>
            <p className='fw-bolder px-2' style={{borderLeft: 'solid 5px #0D28A6'}}>List Order</p>
           {orders && <DataTable 
                customStyles={customStyles} 
                columns={columns} 
                data={orders.orders} 
                pagination 
                paginationServer
                paginationTotalRows={orders.count}
                // onChangeRowsPerPage={handlePerRowsChange}
                onChangePage={(e) => setCurrentPage(e)}
            />}
        </div>
           
    )
}

export default OrderTable