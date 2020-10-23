import React from 'react'
import './styles.css'

export const Links = () => {
  return (
    <div className="links">
      <div className="links__chapter" id="books">
        Литература
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
      </div>
    </div>
  )
}
