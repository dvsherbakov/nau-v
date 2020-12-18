import React, { useState } from 'react'
import { FormulasCont } from './FormulasCont.jsx'
import './styles.css'

const Links: React.FC = () => {
  const [litVisible, setLitVisible] = useState<boolean>(false)

  return (
    <div className="links">
      <div
        className="links__chapter"
        id="books"
        onClick={() => {
          setLitVisible((prev) => !prev)
        }}
      >
        Литература
        {litVisible && (
          <div className="links__subchapter" id="phisics">
            Физика
            <div className="links__subchapter-list">
              <ul>
                <li>
                  <a href="https://sheba.spb.ru/s/knigi/slovar-fizik1984.djvu">
                    Энциклопедический словарь юного физика <span>1984</span>
                  </a>
                </li>
                <li>
                  <a href="https://sheba.spb.ru/s/knigi/fizika-vne-1977.djvu">
                    Внеклассная работа по физике <span>1977</span>
                  </a>
                </li>
                <li>
                  <a href="https://sheba.spb.ru/shkola/fizika-10fak-1987.djvu">
                    Факультативный курс физики ДЛЯ 10 КЛАССА <span>1987</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { FormulasCont, Links }
