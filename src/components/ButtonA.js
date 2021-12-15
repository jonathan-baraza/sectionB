import React from 'react'

const ButtonA = ({clicked}) => {
    
    return (
        <div>
            <button className="button" onClick={clicked}>
                Button A +1
            </button>
            
        </div>
    )
}

export default ButtonA
