import React from 'react'

function SavingsBlock(props) {
    const {savings} = props
  return (
    <div className='card card-col p-2 row-savings'>
        <div className='card-row'>
            <span>
                <div className='avatar'>
                    {savings.icon}
                </div>
                <p>{savings.name}</p>
            </span>

        </div>
       
        <p className='amount amount-save'> R {savings.saves.toFixed(2)}<span> / R {savings.salary.toFixed(2)}</span></p>
    </div>
  )
}

export default SavingsBlock