import React from 'react'
import spinner from './spinner.gif'
export default () => {
    return (
        <div className = "text-center">
            <img src ={spinner} alt="Loading..." style={{width: '200px'}}></img>
        </div>
    )
}