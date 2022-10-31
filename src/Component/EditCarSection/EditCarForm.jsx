import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const EditCarSection = (props) => {
const { car } = useSelector((state) => state.cars)

const {
    setCarName,
    setCarPrice,
    setCarImage,
    setCarCategory,
} = props

    return (
        <Fragment>
            <div class="container">
                <div>
                    <h2>Edit Car</h2>
                </div>

            <form>
                <div class="card">
                    <div class='card-body'>
                        <div class='row mb-3 ps-2 pt-3'>
                            <div class="col-2">
                                <label 
                                for="formGroupExampleInput" 
                                class="form-label">Nama</label>
                            </div>
                            <div class='col-4'>
                                <input 
                                onChange={(e) => setCarName(e.target.value)}
                                type="text" 
                                class="form-control" 
                                placeholder={car.name}
                                required/>
                            </div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class="col-2">
                                <label 
                                for="formGroupExampleInput" 
                                class="form-label">Harga</label>
                            </div>
                            <div class="col-4">
                                <input 
                                onChange={(e) => setCarPrice(e.target.value)}
                                type="number" 
                                class="form-control" 
                                placeholder={car.price}
                                min="0"
                                required/>
                            </div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class="col-2">
                                <label 
                                for="formGroupExampleInput" 
                                class="form-label">Foto</label>
                            </div>
                            <div class="col-4">
                                <input 
                                onChange={(e) => setCarImage(e.target.value)}
                                type="file" 
                                class="form-control" 
                                placeholder={car.image}/>
                                </div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class='col-2'>
                                <label 
                                for="formGroupExampleInput" 
                                class="form-label">Kategori</label>
                            </div>
                            <div class="col-4">
                                <select 
                                onChange={(e) => setCarCategory(e.target.value)}
                                class="form-select" 
                                aria-label="Default select example"
                                required>
                                    <option value="1">2 - 4 orang</option>
                                    <option value="2">4 - 6 orang</option>
                                    <option value="3">6 - 8 orang</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-3 ps-2">
                            <div class="col-2">
                                Created at
                            </div>
                            <div class="col-4">
                                -
                            </div>
                        </div>
                        <div class="row mb-3 ps-2">
                            <div class="col-2">
                                Updates at
                            </div>
                            <div class="col-4">
                                -
                            </div>
                        </div>
                    </div>
                </div>
             </form>           
            </div>
        </Fragment>
    )
}


export default EditCarSection