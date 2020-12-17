import React, { useState, useEffect } from 'react'
import formulas from './FormulasList'
import { Formula } from './Formula'
import { InputToolTips } from '../InputToolTips'
import { IFormula } from './types'
import './styles.css'
import { PageSelector } from '../PageSelector'

const Formulas = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [founds, setFounds] = useState<string[]>([])
  const [fList, setList] = useState<IFormula[]>([])
  const [curPage, setPage] = useState(1)

  useEffect(() => {
    setList(formulas.length > 5 ? formulas.slice(0, 5) : [...formulas])
  }, [])

  useEffect(() => {
    setList(
      formulas.length > (curPage - 1) * 5
        ? formulas.slice((curPage - 1) * 5, curPage * 5)
        : formulas.slice(0, 5)
    )
  }, [curPage])

  const list = fList.map((e) => {
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
      {formulas.length > 5 && (
        <PageSelector
          current={curPage}
          count={5}
          total={formulas.length}
          selectPage={setPage}
        />
      )}
    </div>
  )
}

export { Formulas }
