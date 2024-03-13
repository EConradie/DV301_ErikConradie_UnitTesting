import React from 'react'

function LastTotalCard(props) {
  const {total} = props;

  return (
    <div className='final-total p-2'>
        <div className='icon' style={{backgroundColor: total.color}}>
            <img src={total.icon} width={40} height={40} />
        </div>
        <h2>R {total.total.toFixed(2)}</h2>
        <p>{total.label}</p>
    </div>
  )
}

export default LastTotalCard