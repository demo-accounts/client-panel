import React from 'react'
import Clients from '../clients/Clients'
import SideBar from '../layout/SideBar'

export default () => {
    return (
        <div>
            <div className = "row">
                <div className ="col-md-11">
                    <Clients /> 
                </div> 
                <div className ="col-md-1">
                    <SideBar /> 
                </div> 
            </div>
        </div>
    )
}