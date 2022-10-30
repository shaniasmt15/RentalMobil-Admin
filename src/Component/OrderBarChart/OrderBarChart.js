import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderReport } from '../../Features/order/order-slice';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function OrderBarChart() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { orderReport } = useSelector(state => {return state.order});
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };


      const labels = []
      const dataOrder = []

      if (orderReport) {
        orderReport.forEach(element => {
            dataOrder.push(element.orderCount);
            labels.push(element['day'].split('-')[2]);
        });
      }

      const data = {
        labels,
        datasets: [
          {
            label: 'Amount of Car Rented',
            data: dataOrder,
            backgroundColor: '#586B90'
          },
        ],
      };
    

    const [params, setParams] = useState({
      from: '2022-10-01',
      until: '2022-10-31'
    })
    
    const handleSetParams = (x) => {
      setParams({
        from: `2022-${x}-01`,
        until: `2022-${x}-31`
      })
    }

    const [dropdownValue, setDropdownValue] = useState('10');

    useEffect(() => {
        dispatch(getOrderReport(params))
        .then(setLoading(false))
    }, [])

    return (
      <div className='container'>
        <p className='fw-bolder px-2' style={{borderLeft: 'solid 5px #0D28A6'}}>Rented Car Data Visualization</p>
        <p className='m-0'>Month</p>
        <div className="input-group mb-5" style={{width: '250px'}}>
          <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" value={dropdownValue} onChange={(e) => {handleSetParams(e.target.value); setDropdownValue(e.target.value)}}>
            <option>Choose...</option>
            <option value="01" >Januari 2022</option>
            <option value="02" >Februari 2022</option>
            <option value="03" >Maret 2022</option>
            <option value="04" >April 2022</option>
            <option value="05" >Mei 2022</option>
            <option value="06" >Juni 2022</option>
            <option value="07" >Juli 2022</option>
            <option value="08" >Agustus 2022</option>
            <option value="09" >September 2022</option>
            <option value="10" >Oktober 2022</option>
            <option value="11" >November 2022</option>
            <option value="12" >Desember 2022</option>
          </select>
          <button className="btn text-light" style={{backgroundColor: '#0D28A6'}} type="button" onClick={() => dispatch(getOrderReport(params))}>Go</button>
        </div>
        {
            !loading ? <Bar options={options} data={data} /> : <h1>Loading...</h1>
        }
      </div>
    )
}

export default OrderBarChart