import React from 'react'

const ButtonC = ({clicked}) => {
    return (
        <div>
            <button className="button" onClick={clicked}>
                Button C +100
            </button>
            
        </div>
    )
}

export default ButtonC
