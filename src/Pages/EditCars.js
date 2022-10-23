import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Form } from '../Component/Form'

export const EditCars = () => {
  const param = useParams()
  // console.log(param.id, 'edit id')
  const location = useLocation()
  return (
    <>
      <Form page={location.pathname} id={param.id} />
    </>
  )
}
