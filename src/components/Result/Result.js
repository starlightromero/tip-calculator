import React from 'react'

const Result = props => {
  return (
    <div>
      <p>Tip Amount: ${props.tipAmount.toFixed(2)}</p>
      <p>Total Bill: ${props.totalBill.toFixed(2)}</p>
      <p>Amount per person: ${props.personAmount.toFixed(2)}</p>
    </div>
  )
}

export default Result
