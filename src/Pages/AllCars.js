import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from "../Features/cars/car-slice";

import DataTable from 'react-data-table-component';

const AllCars = () => {

    const dispatch = useDispatch(); //ini fitur redux untuk memanggil action di dalam reducer / slice
    //set loading stop & loading start
    const [loading, setLoading] = React.useState(true);
    
    const cars = useSelector((state) => state.cars);

    React.useEffect(()=>{
        if(cars && cars !== null) {
            setTimeout(()=>{setLoading(!loading)}, 5000)
        }
    }, [cars])

    const columns = [
        {
            name: 'Nama',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Status',
            // selector: (row) => {row.status===false ? 'Sedang disewa' : 'Tersedia'},
            sortable: true,
            cell: (row) => (
               <>
               {row.status=== false ? 'tidak ada' : 'ada'}
               </>
              ),
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        }
    ] 

    return(
        <>
        Halaman All Cars
        <button 
        onClick={()=>{
            dispatch(getAllCars())
            }} >
        Get Data 
        </button>
        {/* jika semua data langsung di fetch dalam 1 waktu */}

        { cars && 
        <DataTable 
            title="List Mobil" 
            columns={columns} 
            data={cars} 
            progressPending={loading}
            pagination
        /> }

        {/* jika api nya menerapkan pagination, berarti kita butuh handling tambahan untuk menghandle fetch API 
        berdasarkan pagination (jumlah pertampilan, jumlah skip)
        */}
        </>
        
    )

}

export default AllCars;