import React from 'react'

export const NavBar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-3'>
        <span className='navbar-brand'>
            <i className='fas fa-calendar-alt'></i>
            &nbsp;
            Miguel
        </span>

        <button className='btn btn-outline-danger'>
            <i className='fas fa-sign-out-alt'></i>
            &nbsp;
            Salir  
            </button>

    </div>
  )
}
