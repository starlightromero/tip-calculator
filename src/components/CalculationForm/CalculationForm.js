import React from 'react'
import classes from './CalculationForm.module.css'

const CalculationForm = props => {
  return (
    <form className={classes.CalculationForm}>
      <h1>{props.title}</h1>
      {props.children}
    </form>
  )
}

export default CalculationForm
