import React from 'react'

function SavingsBlock(props) {
    const {savings} = props
  return (
    <div data-testid="savings-card" className='card card-col p-2 row-savings'>
        <div className='card-row'>
            <span>
                <div aria-label='icon' className='avatar'>
                    {savings.icon}
                </div>
                <p aria-label='name'>{savings.name}</p>
            </span>

        </div>
       
        <p aria-label='savings' className='amount amount-save'> R {savings.saves.toFixed(2)}<span> / R {savings.salary.toFixed(2)}</span></p>
    </div>
  )
}

export default SavingsBlock