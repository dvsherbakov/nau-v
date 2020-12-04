import React, { useState } from 'react'
import MathJax from 'react-mathjax-preview'
import './styles.css'

export const Formulas = () => {
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
        {formulaVisible && (
          <div>
            <table className="formulas__table">
              <tr>
                <td>Скорость</td>
                <td className="formulas__cell">
                  <MathJax math="`v=S/t`" />
                </td>
                <td>
                  <MathJax math="`v` - скорость" />
                  <MathJax math="`S` - путь" />
                  <MathJax math="`t` - время" />
                </td>
                <td>
                  <MathJax math="`м/с`" />
                  <MathJax math="`м`" />
                  <MathJax math="`с`" />
                </td>
              </tr>
              <tr>
                <td>Плотность</td>
                <td>
                  <MathJax math="`\rho=m/V`" />
                </td>
                <td>
                  <MathJax math="`\rho` - плотность" />
                  <MathJax math="`m` - масса" />
                  <MathJax math="`V` - объем" />
                </td>
                <td>
                  <MathJax math="`\text{кг}/{м^3}`" />
                  <MathJax math="`\text{кг}`" />
                  <MathJax math="`м^3`" />
                </td>
              </tr>
              <tr>
                <td>Сила тяжести</td>
                <td>
                  <MathJax math="`F=m\cdotg`" />
                </td>
                <td>
                  <MathJax math="`F` - сила" />
                  <MathJax math="`m` - масса" />
                  <MathJax math="`g` - ускорение свободного падения" />
                </td>
                <td>
                  <MathJax math="`Н`" />
                  <MathJax math="`\text{кг}`" />
                  <MathJax math="`Н/\text{кг}`" />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
