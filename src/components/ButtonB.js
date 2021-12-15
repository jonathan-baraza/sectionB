import React from 'react'

const ButtonB = ({clicked}) => {
    return (
        <div>
            <button className="button" onClick={clicked}>
                Button B +10
            </button>
            
        </div>
    )
}

export default ButtonB
