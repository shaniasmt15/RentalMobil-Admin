import React from 'react'
import { useLocation } from 'react-router-dom'
import { Form } from '../Component/Form'

export const CreateCars = () => {

  const location = useLocation()

  return (
    <>
     <Form page={location.pathname} />
    </>
  )
}
