import React, { useState } from 'react'
import './styles.css'

export const Formulas: React.FC = () => {
  const [formulaVisible, setFormulaVisible] = useState<boolean>(false)

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
    </div>
  )
}
