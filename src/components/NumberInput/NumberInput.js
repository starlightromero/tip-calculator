import React, { useEffect } from 'react'
import classes from './NumberInput.module.css'

const NumberInput = props => {
  const { value, setValue, recalculate } = props

  useEffect(() => {
    recalculate()
  }, [recalculate, value])

  return (
    <div className={classes.NumberInput}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type='number'
        id={props.name}
        min='0'
        value={value}
        onChange={event => setValue(event.target.value)} />
    </div>
  )
}

export default NumberInput
