import React, { useState, useCallback } from 'react'
import './App.css'
import CalculationForm from './components/CalculationForm/CalculationForm'
import NumberInput from './components/NumberInput/NumberInput'
import Result from './components/Result/Result'

const App = props => {
  const [ bill, setBill ] = useState('')
  const [ tipPercentage, setTipPercentage ] = useState('')
  const [ billSplit, setBillSplit ] = useState('')
  const [ tipAmount, setTipAmount ] = useState(0)
  const [ totalBill, setTotalBill ] = useState(0)
  const [ personAmount, setPersonAmount ] = useState(0)

  const calculateTipAmount = useCallback(() => {
    setTipAmount(+bill * +tipPercentage / 100)
  }, [bill, tipPercentage])

  const calculateTotalBill = useCallback(() => {
    setTotalBill(+bill + tipAmount)
  }, [bill, tipAmount])

  const calculatePersonAmount = useCallback(() => {
    billSplit ? setPersonAmount(totalBill / +billSplit) : setPersonAmount(0)
  }, [totalBill, billSplit])

  const recalculate = useCallback(() => {
    calculateTipAmount()
    calculateTotalBill()
    calculatePersonAmount()
  }, [calculateTipAmount, calculateTotalBill, calculatePersonAmount])

  return (
    <div className='App'>
      <CalculationForm title='Calculate Tips!'>
        <NumberInput
          name='Bill'
          value={bill}
          setValue={setBill}
          recalculate={recalculate} />
        <NumberInput
          name='Tip %'
          value={tipPercentage}
          setValue={setTipPercentage}
          recalculate={recalculate} />
        <NumberInput
          name='Split'
          value={billSplit}
          setValue={setBillSplit}
          recalculate={recalculate} />
      </CalculationForm>
      <Result
        tipAmount={tipAmount}
        totalBill={totalBill}
        personAmount={personAmount} />
    </div>
  )
}

export default App
