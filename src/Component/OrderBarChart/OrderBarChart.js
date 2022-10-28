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
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
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

    useEffect(() => {
        dispatch(getOrderReport(params));
        setLoading(false)
    }, [params])

    return (
        <div className='container'>
            {
                !loading ? <Bar options={options} data={data} /> :
                <h1>Loading...</h1>
            }
            
        </div>
    )
}

export default OrderBarChart