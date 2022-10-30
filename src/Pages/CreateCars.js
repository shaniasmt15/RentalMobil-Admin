import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form } from '../Component/Form'

export const CreateCars = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {isLoggedIn} = useSelector(state => {return state.auth});

  useEffect(() => {
    !isLoggedIn && navigate('/login');
  },[])

  return (
    <>
     <Form page={location.pathname} />
    </>
  )
}
