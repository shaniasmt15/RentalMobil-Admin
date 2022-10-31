import React, { Fragment } from 'react'
import EditCarButton from '../Component/EditCarSection/EditCarButton'
import EditCarSection from '../Component/EditCarSection/EditCarForm'
import Header from '../Component/Header/Header'


const EditCar = () => {
  return (
    <Fragment>
    <Header/>
    <EditCarSection />
    <EditCarButton/>
    </Fragment>
  )
}

export default EditCar