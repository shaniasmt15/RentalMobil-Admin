import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../Features/auth/auth-slice';
import './LoginSection.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


function LoginSection() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message)

    const handleSubmit = async (values, actions) => {
        try {
            dispatch(authLogin(values));
            actions.setSubmitting(false);
            actions.resetForm();
        } catch (error) {
            console.log(error);
            actions.setSubmitting(false);
            actions.resetForm();
        }
    }

    const loginValidation = Yup.object().shape({
        email: Yup.string()
        .email('Invalid Email Format')
        .required('Email is Required'),
        password: Yup.string()
        .required('Password is Required')
    }) 

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidation,
        onSubmit: (values, actions) => {
            handleSubmit(values, actions)
        }
    })

    useEffect(() => {
        isLoggedIn && navigate('/');
    })

    return (
        <section id="loginSection">
            <div className='container-fluid'>
                <div className='row min-vh-100'>
                    <div className="left-side col-lg-8 p-0 d-none d-lg-flex">
                        <div className='image'>
                            <img src='/Assets/cover.png' alt='car'></img>
                        </div>
                    </div>
                    <div className="right-side col-lg-4 d-flex justify-content-center align-items-center">
                        <form className="mx-3" onSubmit={formik.handleSubmit}>
                            <div className="rectangle"></div>
                            <h1 className="w-100 my-4">Welcome Admin BCR!</h1>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name='email'
                                    className="form-control" 
                                    id="email" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Masukkan Email" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    style={formik.errors.email && formik.touched.email && {border: 'red 1px solid'}}
                                />
                                {formik.touched.email && formik.errors.email ? <div className="text-danger mt-1">{formik.errors.email}</div> : null}
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password"
                                    name='password'
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Masukkan Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    style={formik.errors.password && formik.touched.password && {border: 'red 1px solid'}}
                                />
                                {formik.touched.password && formik.errors.password ? <div className="text-danger mt-1">{formik.errors.password}</div> : null}
                            </div>
                            {message != 'berhasil login' && message != null ? <div className="alert alert-danger" role="alert">{message}</div> : null}
                            <button type="submit" className="btn mt-3">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginSection;