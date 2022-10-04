import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Editcarform = () => {
    return (
        <>
            <div class="container">
                <div>
                    <h2>Edit Car</h2>
                </div>


                <div class="card">
                    <div class='card-body'>
                        <div class='row mb-3 ps-2 pt-3'>
                            <div class="col-2">
                                <label for="formGroupExampleInput" class="form-label">Nama</label>
                            </div>
                            <div class='col-4'>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Innova"></input>
                            </div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class="col-2">
                                <label for="formGroupExampleInput" class="form-label">Harga</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Rp. 500.000"></input>
                            </div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class="col-2">
                                <label for="formGroupExampleInput" class="form-label">Foto</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Another input placeholder"></input></div>
                        </div>
                        <div class='row mb-3 ps-2'>
                            <div class='col-2'>
                                <label for="formGroupExampleInput" class="form-label">Kategori</label>
                            </div>
                            <div class="col-4">
                                <select class="form-select" aria-label="Default select example">
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

                    <div class="d-grid gap-2 d-md-flex pt-5 mt-5 mb-1 ms-2">
                        <button class="btn btn-light me-md-2" type="button">Cancel</button>
                        <button class="btn btn-primary" type="button">Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editcarform