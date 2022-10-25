import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Form } from '../Component/Form'

export const EditCars = () => {
  const param = useParams()
  const location = useLocation()
  return (
    <>
      <Form page={location.pathname} id={param.id} />
    </>
  )
}
