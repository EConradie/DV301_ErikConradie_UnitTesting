import React from 'react'

function TaxBlock(props) {
    const {tax} = props
    
  return (
    <div data-testid="tax-card" className='card card-col p-2 row-tax'>
        <div className='card-row'>
            <span>
                <div aria-label='icon' className='avatar'>
                    {tax.icon}
                </div>
                <p aria-label='name'>{tax.name}</p>
            </span>

            <h4 aria-label='bracket'>{tax.bracket}%</h4>
        </div>
       
        <p aria-label='taxamount' className='amount'>- R {tax.taxAmount.toFixed(2)}</p>
    </div>
  )
}

export default TaxBlock