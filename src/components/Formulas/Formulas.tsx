import React, { useState, useEffect, useRef, KeyboardEvent } from 'react'
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
  const [formulaFilter, setFilter] = useState('')

  const fltrInp = useRef<HTMLInputElement>(null)
  const totalItem = useRef(0)

  useEffect(() => {
    totalItem.current = formulas.length
    setList(formulas.length > 5 ? formulas.slice(0, 5) : [...formulas])
  }, [])

  useEffect(() => {
    const words = formulaFilter
      ? formulaFilter.toLowerCase().split(/[\s,.]+/)
      : []
    const filteredFormulas = words.length
      ? formulas.filter((frm) =>
          words.every((item) => frm.name.toLowerCase().includes(item))
        )
      : [...formulas]
    totalItem.current = filteredFormulas.length
    setList(
      filteredFormulas.length > (curPage - 1) * 5
        ? filteredFormulas.slice((curPage - 1) * 5, curPage * 5)
        : filteredFormulas.slice(0, 5)
    )
  }, [curPage, formulaFilter])

  const list = fList.map((e) => {
    return <Formula key={e.keyId} {...e} />
  })

  const onSetFilterHandler = (fltr: string) => {
    setFilter(fltr)
    setTooltipVisible(false)
  }

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

  const handleKeywordKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (fltrInp.current) {
        onSetFilterHandler(fltrInp.current.value)
      }
    }
  }

  return (
    <div className="container">
      <div className="formula__input_group">
        <input
          type="text"
          ref={fltrInp}
          onChange={onChangeInputHandler}
          onKeyPress={handleKeywordKeyPress}
          placeholder="Начните вводить название формулы"
        />
        <button
          className="formula__input_button"
          onClick={() => {
            if (fltrInp.current) onSetFilterHandler(fltrInp.current.value)
          }}
        />
        {tooltipVisible && (
          <InputToolTips tooltips={founds} setFilter={onSetFilterHandler} />
        )}
      </div>
      <div className="formula__container">{list}</div>
      {formulas.length > 5 && (
        <PageSelector
          current={curPage}
          count={5}
          total={totalItem.current}
          selectPage={setPage}
        />
      )}
    </div>
  )
}

export { Formulas }
