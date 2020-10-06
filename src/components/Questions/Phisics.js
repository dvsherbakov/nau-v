import React, { useRef } from 'react'
import MathJax from 'react-mathjax-preview'
import {
  ImgF001001,
  ImgF001004,
  ImgF001005,
  ImgF001008,
  ImgF001010,
  ImgF001011,
  ImgF001012,
  ImgF001013,
  ImgF001014,
  ImgF001015,
  ImgF001016,
} from './PhisicsImages'

export const Phisics = [
  {
    key: 'f_001_001',
    Body: function (SetAnswer) {
      const imageSvg = {
        width: '250px',
        height: '250px',
      }
      const answHandler = (e) => {
        SetAnswer('f_001_001', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${ImgF001001}`}
            />
            <div className="quest__group__wrapper">
              <div className="quest__body">
                Два точечных тела 1 и 2 движутся вдоль оси OX. Зависимости
                координат x этих тел от времени t изображены на рисунке. В какой
                момент времени проекции скоростей этих тел будут приблизительно
                одинаковыми? Ответ укажите с точностью до целого.
              </div>
              <div className="quest__group">
                <input
                  className="quest__input"
                  type="text"
                  placeholder=" "
                  onChange={answHandler}
                />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_002',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_002', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            <MathJax
              math="Сила гравитационного взаимодействия небольших тел массами m и M,
            находящихся на расстоянии 
            `R_{1} = 100` км друг от друга, равна по модулю F.
            Сила гравитационного взаимодействия небольших тел массами 2m и M,
            находящихся на расстоянии `R_{2}` друг от друга, равна по модулю `| F/50 |`. На
            какую величину отличаются расстояния `R_{1}` и `R_{2}`? Ответ выразите в
            километрах."
            />
          </div>
          <div className="quest__group">
            <input
              className="quest__input"
              type="text"
              placeholder=" "
              onChange={answHandler}
            />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_003',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_003', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            Изначально покоившемуся телу массой 2,5 кг сообщают начальную
            скорость, вектор которой направлен вверх вдоль наклонной плоскости.
            К моменту остановки тела его потенциальная энергия в поле силы
            тяжести увеличивается на 15 Дж относительно начального положения,
            при этом выделяется количество теплоты 5 Дж. Определите модуль
            начального импульса тела.
          </div>
          <div className="quest__group">
            <input
              className="quest__input"
              type="text"
              placeholder=" "
              onChange={answHandler}
            />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_004',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_004', [e.target.value])
      }
      const imageSvg = {
        width: '400px',
        height: '200px',
      }
      return (
        <div className="quest">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${ImgF001004}`}
            />
          </div>
          <div className="quest__body">
            К левому концу невесомого стержня прикреплен груз массой 3 кг (см.
            рисунок). Стержень расположили на опоре, отстоящей от его левого
            конца на 0,2 длины стержня. Чему равна масса груза, который надо
            подвесить к правому концу стержня, чтобы он находился в равновесии?
            (Ответ дайте в килограммах.)
          </div>

          <div className="quest__group">
            <input
              className="quest__input"
              type="text"
              placeholder=" "
              onChange={answHandler}
            />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_005',
    Body: function (SetAnswer) {
      const imageSvg = {
        width: '750px',
        height: '250px',
      }
      const conv1 = useRef(null)
      const conv2 = useRef(null)
      const answHandler = () => {
        SetAnswer('f_001_005', [conv1.current.value, conv2.current.value])
      }
      return (
        <div className="quest">
          <div className="quest__vertical__wrapper">
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${ImgF001005}`}
            />
          </div>
          <div className="quest__body">
            <MathJax
              math="
            Из лёгкого жёсткого стержня сделан горизонтальный рычаг с длинами
            плеч 50 см и 200 см. К короткому концу рычага на нити подвешен груз
            массой m, а к длинному концу рычага для уравновешивания приложена
            некоторая сила. Человек начинает медленно опускать длинный конец
            рычага, прикладывая к нему вертикально вниз силу `\vec{F}` (см. рисунок). На
            графике показана зависимость момента M силы тяжести груза m
            (относительно точки опоры рычага) от угла α между рычагом и
            горизонтом. Из приведённого ниже списка выберите два правильных
            утверждения на основании анализа графика."
            />
            <ol>
              <li>
                При повороте рычага плечо действующей на груз силы тяжести не
                изменяется.
              </li>
              <li>
                Когда уравновешенный рычаг горизонтален, модуль приложенной к
                его длинному концу силы равен 0,5 Н.
              </li>
              <li>Масса груза m равна 250 г.</li>
              <li>
                При увеличении угла α сила давления рычага на опору уменьшается.
              </li>
              <li>
                <MathJax math="Момент силы `\vec{F}` относительно точки опоры рычага всё время не превышает 1 Н·м." />
              </li>
            </ol>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                onChange={answHandler}
                ref={conv1}
              />
              <label className="quest__label">Утверждение 1</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                onChange={answHandler}
                ref={conv2}
              />
              <label className="quest__label">Утверждение 2</label>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_006',
    Body: function (SetAnswer) {
      const convA = useRef(null)
      const convB = useRef(null)
      const convC = useRef(null)
      const convD = useRef(null)
      const convE = useRef(null)

      const answHandler = () => {
        SetAnswer('f_001_006', [
          convA.current.value,
          convB.current.value,
          convC.current.value,
          convD.current.value,
          convE.current.value,
        ])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            Комета движется по эллиптической орбите вокруг Солнца. Как
            изменяются перечисленные в первом столбце физические величины во
            время её приближения к Солнцу, если считать, что на нее действует
            только тяготение Солнца? Установите соответствие между физическими
            величинами, перечисленными в первом столбце, и изменениями,
            перечисленными во втором столбце. Запишите в таблицу выбранные цифры
            под соответствующими буквами.
            <div className="quest__ans__group">
              <div>
                <ol type="A">
                  <li>Скорость</li>
                  <li>Ускорение</li>
                  <li>Кинетическая энергия</li>
                  <li>Потенциальная энергия</li>
                  <li>Полная механическая энергия</li>
                </ol>
              </div>
              <div>
                <ol>
                  <li>Не изменяется</li>
                  <li>Только увеличивается по величине</li>
                  <li>Только уменьшается по величине</li>
                  <li>Увеличивается по величине и изменяется по направлению</li>
                  <li>Уменьшается по величине и изменяется по направлению</li>
                  <li>
                    Увеличивается по величине, не изменяется по направлению
                  </li>
                  <li>уменьшается по величине, не изменяется по направлению</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convA}
                onChange={answHandler}
              />
              <label className="quest__label">A</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convB}
                onChange={answHandler}
              />
              <label className="quest__label">B</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convC}
                onChange={answHandler}
              />
              <label className="quest__label">C</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convD}
                onChange={answHandler}
              />
              <label className="quest__label">D</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convE}
                onChange={answHandler}
              />
              <label className="quest__label">E</label>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_007',
    Body: function (SetAnswer) {
      const convA = useRef(null)
      const convB = useRef(null)
      const convC = useRef(null)
      const convD = useRef(null)

      const answHandler = () => {
        SetAnswer('f_001_007', [
          convA.current.value,
          convB.current.value,
          convC.current.value,
          convD.current.value,
        ])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            Установите соответствие между понятиями и их определениями: к
            каждому элементу первого столбца подберите соответствующий элемент
            из второго и внесите в строку ответов выбранные цифры под
            соответствующими буквами.
            <div className="quest__ans__group">
              <div>
                <ol type="A">
                  <li>Замкнутая система</li>
                  <li>Импульс тела</li>
                  <li>Поперечная волна</li>
                  <li>Кинетическая энергия</li>
                </ol>
              </div>
              <div>
                <ol>
                  <li>
                    Волна, в которой движение частиц среды происходит в
                    направлении распространения волны.
                  </li>
                  <li>
                    Система тел, взаимодействующих только между собой и не
                    взаимодействующих с телами, не входящими в эту систему.
                  </li>
                  <li>
                    Величина, равная произведению массы тела на его скорость.
                  </li>
                  <li>
                    Волна, в которой частицы среды перемещаются перпендикулярно
                    направлению распространения волны.
                  </li>
                  <li>
                    Системы отсчета, в которых тело сохраняет состояние покоя
                    или равномерного прямолинейного движения до тех пор, пока на
                    него не подействуют другие тела или действия других тел
                    компенсируются.
                  </li>
                  <li>
                    Величина, равная половине произведения массы тела на квадрат
                    его скорости.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convA}
                onChange={answHandler}
              />
              <label className="quest__label">A</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convB}
                onChange={answHandler}
              />
              <label className="quest__label">B</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convC}
                onChange={answHandler}
              />
              <label className="quest__label">C</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convD}
                onChange={answHandler}
              />
              <label className="quest__label">D</label>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_008',
    Body: function (SetAnswer) {
      const imageSvg = {
        width: '250px',
        height: '250px',
      }
      const answHandler = (e) => {
        SetAnswer('f_001_008', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${ImgF001008}`}
            />
            <div className="quest__group__wrapper">
              <div className="quest__body">
                <MathJax
                  math="В сосуде находится некоторое количество идеального газа. Он
            переходит из состояния 1 в состояние 2 (см. рисунок). Чему равно
            отношение объёмов `V_{2}/V_{1}`"
                />
              </div>
              <div className="quest__group">
                <input
                  className="quest__input"
                  type="text"
                  placeholder=" "
                  onChange={answHandler}
                />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_009',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_009', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            Температура нагревателя тепловой машины 900 К, температура
            холодильника на 300 К меньше, чем у нагревателя. Каков максимально
            возможный КПД машины? (Ответ дайте в процентах, округлив до целых.)
          </div>
          <div className="quest__group">
            <input
              className="quest__input"
              type="text"
              placeholder=" "
              onChange={answHandler}
            />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_010',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_010', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__vertical__wrapper">{ImgF001010}</div>
          <div className="quest__body">
            На рисунке показан график изменения температуры вещества по мере
            поглощения им количества теплоты. Вещество находится в сосуде под
            поршнем. Масса вещества равна 0,5 кг. Первоначально вещество было в
            жидком состоянии. Какова удельная теплота парообразования вещества?
            Ответ дайте в кДж/кг.
          </div>
          <div className="quest__group">
            <input
              className="quest__input"
              type="text"
              placeholder=" "
              onChange={answHandler}
            />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_011',
    Body: function (SetAnswer) {
      const conv1 = useRef(null)
      const conv2 = useRef(null)
      const answHandler = () => {
        SetAnswer('f_001_011', [conv1.current.value, conv2.current.value])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            {ImgF001011}
            <div className="quest__group__wrapper">
              <div className="quest__body">
                Два моля одноатомного идеального газа участвуют в циклическом
                процессе, график которого изображён на UV-диаграмме (U —
                внутренняя энергия газа, V — его объём). Выберите два верных
                утверждения на основании анализа представленного графика.
                <ol>
                  <li>В процессе 1–2 газ адиабатно нагревается.</li>
                  <li>В процессе 2–3 температура газа не изменяется.</li>
                  <li>
                    В процессе 3–4 газ получает некоторое количество теплоты.
                  </li>
                  <li>В процессе 4–1 работа газа равна нулю.</li>
                  <li>
                    В процессе 1–2 газ получает количество теплоты, равное 200
                    Дж.
                  </li>
                </ol>
              </div>
              <div className="quest__ans__group">
                <div className="quest__group">
                  <input
                    className="quest__input"
                    type="text"
                    placeholder=" "
                    ref={conv1}
                    onChange={answHandler}
                  />
                  <label className="quest__label">Утверждение 1</label>
                </div>
                <div className="quest__group">
                  <input
                    className="quest__input"
                    type="text"
                    placeholder=" "
                    ref={conv2}
                    onChange={answHandler}
                  />
                  <label className="quest__label">Утверждение 2</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_012',
    Body: function (SetAnswer) {
      const pressure = useRef(null)
      const volume = useRef(null)
      const energy = useRef(null)
      const answHandler = () => {
        SetAnswer('f_001_012', [
          pressure.current.value,
          volume.current.value,
          energy.current.value,
        ])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            {ImgF001012}
            <div className="quest__group__wrapper">
              <div className="quest__body">
                Идеальный одноатомный газ переходит из состояния 1 в состояние 2
                (см. диаграмму). Масса газа не меняется. Как меняются в ходе
                указанного на диаграмме процесса давление газа, его объем и
                внутренняя энергия? Для каждой величины определите
                соответствующий характер изменения:
                <ol>
                  <li>увеличивается;</li>
                  <li>уменьшается;</li>
                  <li>не меняется.</li>
                </ol>
                Запишите выбранные цифры для каждой физической величины. Цифры в
                ответе могут повторяться.
              </div>
              <div className="quest__ans__group">
                <div className="quest__group">
                  <input
                    className="quest__input"
                    type="text"
                    placeholder=" "
                    ref={pressure}
                    onChange={answHandler}
                  />
                  <label className="quest__label">Давление</label>
                </div>
                <div className="quest__group">
                  <input
                    className="quest__input"
                    type="text"
                    placeholder=" "
                    ref={volume}
                    onChange={answHandler}
                  />
                  <label className="quest__label">Объем</label>
                </div>
                <div className="quest__group">
                  <input
                    className="quest__input"
                    type="text"
                    placeholder=" "
                    ref={energy}
                    onChange={answHandler}
                  />
                  <label className="quest__label">Внутренняя энергия</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_013',
    Body: function (SetAnswer) {
      const b1 = useRef(null)
      const b2 = useRef(null)
      const b3 = useRef(null)
      const b4 = useRef(null)
      const answerSelect = (e) => {
        ;[b1, b2, b3, b4].forEach((btn) => (btn.current.className = ''))
        e.target.className = 'selected'
        if (e.target.id) SetAnswer('f_001_013', [e.target.id])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            {ImgF001013}
            <div className="quest__group__wrapper">
              <div className="quest__body">
                <MathJax math="Протон p влетает в зазор между полюсами электромагнита с горизонтальной скоростью  `\vec{v}` лежащей в плоскости рисунка. Вектор индукции `\vec{B}`  магнитного поля направлен вертикально. Куда направлена действующая на протон сила Лоренца?" />
              </div>
              <div className="quest__ans__group">
                <div className="quest__vgroup">
                  <MathJax math="`\otimes`" />
                  <button id="1" onClick={answerSelect} ref={b1}>
                    от наблюдателя за плоскость рисунка
                  </button>
                </div>
                <div className="quest__vgroup">
                  <MathJax math="`\odot`" />
                  <button id="2" onClick={answerSelect} ref={b2}>
                    к наблюдателю из-за плоскости рисунка
                  </button>
                </div>
                <div className="quest__vgroup">
                  <MathJax math="`\rightarrow`" />
                  <button id="3" onClick={answerSelect} ref={b3}>
                    горизонтально вправо в плоскости рисунка
                  </button>
                </div>
                <div className="quest__vgroup">
                  <MathJax math="`\leftarrow`" />
                  <button id="4" onClick={answerSelect} ref={b4}>
                    горизонтально влево в плоскости рисунка
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_014',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_014', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            {ImgF001014}
            <div className="quest__group__wrapper">
              <div className="quest__body">
                На сколько изменится сопротивление участка цепи АВ,
                изображенного на рисунке, если ключ К разомкнуть? Сопротивление
                каждого резистора равно 4 Ом. (Ответ дайте в омах. Если
                сопротивление увеличится, изменение считайте положительным, если
                уменьшится — отрицательным.)
              </div>

              <div className="quest__group">
                <input
                  className="quest__input"
                  type="text"
                  placeholder=" "
                  onChange={answHandler}
                />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_015',
    Body: function (SetAnswer) {
      const answHandler = (e) => {
        SetAnswer('f_001_015', [e.target.value])
      }
      return (
        <div className="quest">
          <div className="quest__ans__group">
            {ImgF001015}
            <div className="quest__group__wrapper">
              <div className="quest__body">
                На рисунке изображены оптическая ось OO' тонкой собирающей
                линзы, луч света 1, падающий на эту линзу, и луч света 2,
                прошедший через эту линзу. На рисунке размер одной клеточки
                соответствует 1 см. Каково фокусное расстояние линзы? (Ответ
                дать в сантиметрах.)
              </div>

              <div className="quest__group">
                <input
                  className="quest__input"
                  type="text"
                  placeholder=" "
                  onChange={answHandler}
                />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_016',
    Body: function (SetAnswer) {
      const conv1 = useRef(null)
      const conv2 = useRef(null)
      const answHandler = (e) => {
        SetAnswer('f_001_016', [conv1.current.value, conv2.current.value])
      }
      return (
        <div className="quest">
          <div className="quest__vertical__wrapper">{ImgF001016}</div>
          <div className="quest__body">
            <MathJax
              math="Плоский воздушный конденсатор, электроёмкость которого равна 17,7 пФ, заряжают до напряжения 5 В и отключают от источника напряжения. 
                Затем одну пластину начинают медленно удалять от другой. Зависимость расстояния d между пластинами от времени t изображена на рисунке.
                (Электрическая постоянная равна `ε_{0} = 8,85 · 10^{−12}` Ф/м.)"
            />
            На основании заданных параметров и приведённого графика, выберите
            два верных утверждения.
            <ol>
              <li>Площадь пластины конденсатора равна 20 см2.</li>
              <li>
                Заряд на обкладках конденсатора увеличивается прямо
                пропорционально времени.
              </li>
              <li>
                Электроёмкость конденсатора не изменяется с течением времени и
                равна 17,7 пФ.
              </li>
              <li>
                В момент времени t = 10 с модуль напряжённости электрического
                поля в конденсаторе равен 5 В/м.
              </li>
              <li>
                В момент времени t = 20 с напряжение между пластинами
                конденсатора равно 7 В.
              </li>
            </ol>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={conv1}
                onChange={answHandler}
              />
              <label className="quest__label">Утверждение 1</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={conv2}
                onChange={answHandler}
              />
              <label className="quest__label">Утверждение 2</label>
            </div>
          </div>
        </div>
      )
    },
  },
  {
    key: 'f_001_017',
    Body: function (SetAnswer) {
      const convA = useRef(null)
      const convB = useRef(null)
      const answHandler = (e) => {
        SetAnswer('f_001_017', [convA.current.value, convB.current.value])
      }
      return (
        <div className="quest">
          <div className="quest__body">
            Установите соответствие между разновидностями тонкой линзы и
            результатами преломления в ней параллельных лучей. К каждой позиции
            первого столбца подберите нужную позицию второго и запишите в
            таблицу выбранные цифры под соответствующими буквами.
            <div className="quest__ans__group">
              <div>
                <ol type="A">
                  <li>Собирающая</li>
                  <li>Рассеивающая</li>
                </ol>
              </div>
              <div>
                <ol>
                  <li>
                    Лучи, параллельные главной оптической оси линзы, пройдя
                    через нее, пройдут затем через ее дальний фокус
                  </li>
                  <li>
                    Лучи, параллельные главной оптической оси линзы, пройдя
                    через нее, пересекутся затем в ее ближнем фокусе
                  </li>
                  <li>
                    Лучи, параллельные главной оптической оси линзы, пройдя
                    через нее, будут казаться расходящимися из ее ближнего
                    фокуса
                  </li>
                  <li>
                    Лучи, параллельные главной оптической оси линзы, пройдя
                    через нее, соберутся в ее дальнем фокусе
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convA}
                onChange={answHandler}
              />
              <label className="quest__label">A</label>
            </div>
            <div className="quest__group">
              <input
                className="quest__input"
                type="text"
                placeholder=" "
                ref={convB}
                onChange={answHandler}
              />
              <label className="quest__label">B</label>
            </div>
          </div>
        </div>
      )
    },
  },
]
