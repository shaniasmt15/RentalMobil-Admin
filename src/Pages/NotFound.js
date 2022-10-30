import React from 'react'

function NotFound() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center border" style={{height: '100vh'}}>
        <div className="position-absolute" style={{backgroundColor: '#0D28A6', width: '350px', height: '110px', zIndex: '-2', borderTopLeftRadius:"25%", borderTopRightRadius:"25%"}}></div>
        <img className="pb-5 mb-5" style={{width: '250px', zIndex: '-1'}} src="/Assets/car.png" alt="car" />
        <h1 className="text-light position-absolute mt-5 p-3">Page Not Found</h1>
    </div>
  )
}

export default NotFound