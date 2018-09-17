import React from 'react'
import { Link } from 'react-router-dom'


export default () => {
    return (
        <Link to='/clients/add' className = "btn btn-success">
            <i className = "fas fa-plus"></i>  New Client
        </Link>
    )
}