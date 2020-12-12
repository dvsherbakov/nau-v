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
                <td className="center__cell">
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
                <td className="center__cell">
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
                <td className="center__cell">
                  <MathJax math="`Н`" />
                  <MathJax math="`\text{кг}`" />
                  <MathJax math="`Н/\text{кг}`" />
                </td>
              </tr>
              <tr>
                <td>Сила упругости</td>
                <td>
                  <MathJax math="`F_{упр}=k\cdotx`" />
                </td>
                <td>
                  <MathJax math="`F_{упр}` - сила упругости" />
                  <MathJax math="`k` - жёсткость тела" />
                  <MathJax math="`x` - удлиннение тела" />
                </td>
                <td className="center__cell">
                  <div>H</div>
                  <MathJax math="`Н/м`" />
                  <div>M</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>Вес тела</div>
                  <div>Вес тела в жидкости</div>
                </td>
                <td>
                  <MathJax math="`P=m\cdotg`" />
                  <MathJax math="`P=F_m-F_a`" />
                </td>
                <td>
                  <MathJax math="`P` - вес" />
                  <MathJax math="`m` - масса" />
                  <MathJax math="`g` - ускорение свободного падения" />
                </td>
                <td className="center__cell">
                  <MathJax math="`Н`" />
                  <MathJax math="кг" />
                  <MathJax math="`Н/\text{кг}`" />
                </td>
              </tr>
              <tr>
                <td>Давление</td>
                <td>
                  <MathJax math="`p=F/S`" />
                </td>
                <td>
                  <MathJax math="`p` - давление" />
                  <div>F - сила</div>
                  <div>S - площадь</div>
                </td>
                <td className="center__cell">
                  <div>Па</div>
                  <div>Н</div>
                  <div>М</div>
                </td>
              </tr>
              <tr>
                <td>Давление в жидкости (газе)</td>
                <td>
                  <MathJax math="`p=\rho\cdotg\cdoth`" />
                  <MathJax math="`p=p_0+\rho\cdotg\cdoth`" />
                  <MathJax math="`p_a=10^5`Па" />
                </td>
                <td>
                  <MathJax math="`p` - давление" />
                  <MathJax math="`\rho` - плотность жидкости" />
                  <MathJax math="`g` - ускорение свободного падения" />
                  <MathJax math="`h` - высота столба жидкости" />
                  <MathJax math="`p_a` - нормальное атмосферное давление" />
                </td>
                <td className="center__cell">
                  <div>Па</div>
                  <MathJax math="`\text{кг}/{м^3}`" />
                  <MathJax math="`Н/\text{кг}`" />
                  <div>м</div>
                  <div>Па</div>
                </td>
              </tr>
              <tr>
                <td>Зависимость давления воздуха от высоты</td>
                <td>
                  <MathJax math="`p=p_a-h/12`" />
                </td>
                <td>
                  <div>p - давление</div>
                  <div>h - высота</div>
                  <MathJax math="`p_a` - нормальное атмосферное давление" />
                </td>
                <td className="center__cell">
                  <div>Па</div>
                  <div>м</div>
                  <div>Па</div>
                </td>
              </tr>
              <tr>
                <td>Площадь</td>
                <td>
                  <MathJax math="`S=l\cdota`" />
                </td>
                <td>
                  <div>S - площадь</div>
                  <div>l - длинна</div>
                  <div>a - ширина</div>
                </td>
                <td className="center__cell">
                  <div>м</div>
                  <div>м</div>
                  <div>м</div>
                </td>
              </tr>
              <tr>
                <td>Объем</td>
                <td>
                  <MathJax math="`V=S\cdoth`" />
                </td>
                <td>
                  <div>V - объем</div>
                  <div>S - площадь</div>
                  <div>h - высота</div>
                </td>
                <td className="center__cell">
                  <MathJax math="`м^3`" />
                  <MathJax math="`м^2`" />
                  <div>м</div>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
