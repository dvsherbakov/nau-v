import React from 'react'
import { IFormula } from './types'
import './styles.css'

const Formula: React.FC<IFormula> = (props: IFormula) => {
  return (
    <div key={props.keyId} className="formula_item">
      <div className="formula_name">{props.name}</div>
      <div className="formula_body">{props.body}</div>
      <div className="formula_description">{props.description}</div>
      <div className="formula_dimensions">{props.dimendions}</div>
    </div>
  )
}

export { Formula }
