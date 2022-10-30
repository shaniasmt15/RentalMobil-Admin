import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Component/Form'

export const EditCars = () => {
  const param = useParams()
  const location = useLocation()
  const navigate = useNavigate();
  const {isLoggedIn} = useSelector(state => {return state.auth});

  useEffect(() => {
    !isLoggedIn && navigate('/login');
  },[])

  return (
    <>
      <Form page={location.pathname} id={param.id} />
    </>
  )
}
