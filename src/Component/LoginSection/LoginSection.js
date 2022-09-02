import React from 'react';
import './LoginSection.css'


function LoginSection() {
    return (
        <section id="loginSection">
            <div className='container-fluid'>
                <div className='row min-vh-100'>
                    <div className="left-side col-lg-8 p-0">
                        <div className='image'>
                            <img src='/Assets/cover.png'></img>
                        </div>
                    </div>
                    <div className="right-side col-lg-4 d-flex justify-content-center align-items-center">
                        <form className="mx-3">
                            <div className="rectangle"></div>
                            <h1 className="w-100 my-4">Welcome Admin BCR!</h1>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Masukkan Email"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Masukkan Password"/>
                            </div>
                            <button type="submit" className="btn mt-3">Sign In</button>
                            <p className="mt-4 d-flex justify-content-center">Don’t have an account?<a href="/signup">Sign Up for Free</a></p>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default LoginSection;