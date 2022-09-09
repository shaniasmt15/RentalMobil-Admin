import React from "react";
import './RegisterSection.css';


function RegisterSection() {
    return (
        <section id="registerSection">
            <div className='container-fluid'>
                <div className='row min-vh-100'>
                    <div className="left-side col-lg-8 p-0 d-none d-lg-flex">
                        <div className='image'>
                            <img src='/Assets/cover.png'></img>
                        </div>
                    </div>
                    <div className="right-side col-lg-4 d-flex justify-content-center align-items-center">
                        <form className="mx-3">
                            <div className="rectangle"></div>
                            <h1 className="w-100 my-4">Admin Register</h1>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Masukkan Email"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Masukkan Password"/>
                            </div>
                            <button type="submit" className="btn mt-3">Sign In</button>
                            <p className="mt-4 d-flex justify-content-center">Already have an account?<a href="/login">Sign in here</a></p>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default RegisterSection;