import React from 'react'

function ExpenseRow(props) {

  const {expense} = props;

  return (
    <div className='card card-row p-3 mb-2 row-expense'>
        <p>{expense.title}</p>
        <p className='amount'>R {expense.amount.toFixed(2)}</p>
    </div>
  )
}

export default ExpenseRow