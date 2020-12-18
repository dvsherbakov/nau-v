import React, { useState } from 'react'
import { Formulas } from '../Formulas'
import './styles.css'

export const FormulasCont = () => {
  const [formulaVisible, setFormulaVisible] = useState(false)

  return (
    <div className="links">
      <div
        className="links__chapter"
        id="formulas"
        onClick={() => {
          setFormulaVisible((prev) => !prev)
        }}
      >
        Формулы
      </div>
      {formulaVisible && <Formulas />}
    </div>
  )
}
