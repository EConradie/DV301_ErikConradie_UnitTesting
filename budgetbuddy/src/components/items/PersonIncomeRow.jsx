import React from 'react'

function PersonIncomeRow(props) {

  const {person, index} = props;

  return (
    <div className='card card-row p-2 mb-2 row-income' data-testid="income-card">
        <span>
            <div  className='avatar' aria-label='icon'>
                {person.icon}
            </div>
            <p aria-label ='name'>{index}. {person.name}</p>
        </span>
        <p aria-label='income' className='amount'>R {person.salary.toFixed(2)}</p>
    </div>
  )
}

export default PersonIncomeRow