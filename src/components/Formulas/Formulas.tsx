import React from 'react'
import formulas from './FormulasList'
import { Formula } from './Formula'
import './styles.css'

const Formulas = () => {
  const list = formulas.map((e) => {
    return <Formula key={e.keyId} {...e} />
  })
  return <div className="formula_container">{list}</div>
}

export { Formulas }
