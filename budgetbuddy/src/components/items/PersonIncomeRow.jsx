import React from 'react'

function PersonIncomeRow(props) {

  const {person, index} = props;

  return (
    <div className='card card-row p-2 mb-2 row-income'>
        <span>
            <div className='avatar'>
                {person.icon}
            </div>
            <p>{index}. {person.name}</p>
        </span>
        <p className='amount'>R {person.salary.toFixed(2)}</p>
    </div>
  )
}

export default PersonIncomeRow