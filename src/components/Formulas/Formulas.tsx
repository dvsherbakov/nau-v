import React, { useState } from 'react'
import formulas from './FormulasList'
import { Formula } from './Formula'
import { InputToolTips } from '../InputToolTips'
import './styles.css'

const Formulas = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [founds, setFounds] = useState<string[]>([])

  const list = formulas.map((e) => {
    return <Formula key={e.keyId} {...e} />
  })

  const onChangeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    if (newValue.length > 2) {
      const words = newValue.toLowerCase().split(/[\s,.]+/)
      const matches = formulas
        .map((e) => e.name.toLowerCase())
        .filter((str) => words.every((item) => str.includes(item)))
      setFounds(matches)
      setTooltipVisible(true)
    } else setTooltipVisible(false)
  }

  return (
    <div className="container">
      <div className="formula__input_group">
        <input
          type="text"
          onChange={onChangeInputHandler}
          placeholder="Начните вводить название формулы"
          onBlur={() => {
            setTooltipVisible(false)
          }}
        />
        <button className="formula__input_button" />
        {tooltipVisible && <InputToolTips tooltips={founds} />}
      </div>
      <div className="formula__container">{list}</div>
    </div>
  )
}

export { Formulas }
