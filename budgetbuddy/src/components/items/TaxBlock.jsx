import React from 'react'

function TaxBlock(props) {
    const {tax} = props
    
  return (
    <div className='card card-col p-2 row-tax'>
        <div className='card-row'>
            <span>
                <div className='avatar'>
                    {tax.icon}
                </div>
                <p>{tax.name}</p>
            </span>

            <h4>{tax.bracket}%</h4>
        </div>
       
        <p className='amount'>- R {tax.taxAmount.toFixed(2)}</p>
    </div>
  )
}

export default TaxBlock