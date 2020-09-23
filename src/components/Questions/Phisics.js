import React, { useRef } from "react";
import MathJax from "react-mathjax-preview";

export const Phisics = [
  {
    key: "f_001_001",
    Body: function () {
      const svgImage = `<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" width="1000" height="1000">
    <style>
      .mal { font: italic 48px sans-serif; }  
      .ln { font: italic 48px serif; fill: green}
      .pb { font: italic 48px serif; fill: blue}
    </style>
    <path d="M100 900 H 950" stroke="black" fill="transparent" stroke-width="2" />
    <path d="M100 50 V 900" stroke="black" fill="transparent" stroke-width="2"/>
    <path d="M200 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M300 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M400 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M500 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M600 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M700 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M800 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M900 100 V 900" stroke="black" fill="transparent" stroke-width="1"/>
    <path d="M100 800 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 700 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 600 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 500 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 400 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 300 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 200 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 100 H 900" stroke="black" fill="transparent" stroke-width="1" />
    <path d="M100 600 L 600 100" stroke="green" fill="transparent" stroke-width="6" />
    <path d="M100 900 C400 -30, 600 -30, 900 900" stroke="blue" fill="transparent" stroke-width="6" />
    <text x="950" y="950" class="mal">t</text>
    <text x="100" y="950" class="mal">0</text>
    <text x="290" y="950" class="mal">4</text>
    <text x="490" y="950" class="mal">8</text>
    <text x="670" y="950" class="mal">12</text>
    <text x="860" y="950" class="mal">16</text>
    <text x="50" y="50" class="mal">x</text>
    <text x="130" y="480" class="ln">1</text>
    <text x="220" y="680" class="pb">2</text>
    </svg>`;
      const imageSvg = {
        width: "250px",
        height: "250px",
        transition: "5s",
      };
      return (
        <div className="quest">
          <div className="quest__ans__group">
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${svgImage}`}
            />
            <div className="quest__group__wrapper">
              <div className="quest__body">
                Два точечных тела 1 и 2 движутся вдоль оси OX. Зависимости
                координат x этих тел от времени t изображены на рисунке. В какой
                момент времени проекции скоростей этих тел будут приблизительно
                одинаковыми? Ответ укажите с точностью до целого.
              </div>
              <div className="quest__group">
                <input className="quest__input" type="text" placeholder=" " />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_002",
    Body: function () {
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
            <input className="quest__input" type="text" placeholder=" " />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_003",
    Body: function () {
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
            <input className="quest__input" type="text" placeholder=" " />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_004",
    Body: function () {
      const svgImage = `<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" width="1000" height="500">
    <path d="M100 100 H 900" style="stroke:black;stroke-width:2" />
    <path d="M100 140 H 900" style="stroke:black;stroke-width:2" />
    <rect x="100" y="100" width="40" height="40" style="fill:black;stroke:black;stroke-width:1" />
    <rect x="860" y="100" width="40" height="40" style="fill:black;stroke:black;stroke-width:1" />
    <circle cx="263" cy="120" r="20" style="fill:red;stroke:black;stroke-width:1" />
    <circle cx="426" cy="120" r="20" style="fill:red;stroke:black;stroke-width:1" />
    <circle cx="590" cy="120" r="20" style="fill:red;stroke:black;stroke-width:1" />
    <circle cx="754" cy="120" r="20" style="fill:red;stroke:black;stroke-width:1" />
    <polygon points="263,140 326,240 200,240" style="fill:lime;stroke:black;stroke-width:4" />
    <path d="M120 140 V 300" style="stroke:black;stroke-width:2" />
    <rect x="50" y="300" width="140" height="80" style="fill:transparent;stroke:black;stroke-width:3" />
    <path d="M880 140 V 300" style="stroke:blue;stroke-width:2;stroke-opacity:0.6" />
    <rect x="810" y="300" width="140" height="80" style="fill:transparent;stroke:blue;stroke-width:3;stroke-opacity:0.4" />
    <text x="75" y="355" style="font: italic 48px sans-serif">3 кг</text>
    </svg>`;
      const imageSvg = {
        width: "400px",
        height: "200px",
        transition: "5s",
      };
      return (
        <div className="quest">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${svgImage}`}
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
            <input className="quest__input" type="text" placeholder=" " />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_005",
    Body: function () {
      const svgImage = `<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" width="1500" height="500">
      <line x1="50" y1="100" x2="700" y2="200" style="stroke:black;stroke-width:4" />
      <path d="M50 100 V 200" style="stroke:black;stroke-width:4"/>
      <circle cx="50" cy="220" r="20" style="fill:transparent;stroke:black;stroke-width:4" />
      <text x="80" y="230" style="font: italic 36px sans-serif">m</text>
      <polygon points="190,127 170,160 210,160" style="fill:lime;stroke:black;stroke-width:4" />
      <path d="M190 120 H 450" style="stroke:black;stroke-width:2;stroke-dasharray:19 10"/>
      <text x="400" y="100" style="font: italic 36px sans-serif">α</text>
      <path d="M400 120 Q 420 138 400 155" style="fill:transparent;stroke:black;stroke-width:2"/>
      <path d="M700 200 V 420" style="stroke:black;stroke-width:4"/>
      <polygon points="700,440 690,420 710,420" style="fill:black;stroke:black;stroke-width:1" />
      <text x="655" y="430" style="font: italic 36px sans-serif">F</text>
      <text x="655" y="405" style="font: italic 36px sans-serif">→</text>
      <path d="M850 50 V 430" style="stroke:black;stroke-width:4"/>
      <text x="810" y="460" style="font: italic 36px sans-serif">0</text>
      <polygon points="850,25 840,50 860,50" style="fill:black;stroke:black;stroke-width:1" />
      <text x="710" y="60" style="font: italic 36px sans-serif">M, Н*м</text>
      <path d="M850 430 H 1430" style="stroke:black;stroke-width:4"/>
      <polygon points="1460,430 1430,420 1430,440" style="fill:black;stroke:black;stroke-width:1" />
      <text x="1360" y="470" style="font: italic 36px sans-serif">α, рад</text>
      <path d="M850 120 Q 1000 120 1220 430" style="fill:transparent;stroke:black;stroke-width:4"/>
      <text x="1200" y="470" style="font: italic 36px sans-serif">π/2</text>
      <text x="810" y="135" style="font: italic 36px sans-serif">1</text>
    </svg>`;
      const imageSvg = {
        width: "750px",
        height: "250px",
      };
      return (
        <div className="quest">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${svgImage}`}
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
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Утверждение 1</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Утверждение 2</label>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_006",
    Body: function () {
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
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">A</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">B</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">C</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">D</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">E</label>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_007",
    Body: function () {
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
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">A</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">B</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">C</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">D</label>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_008",
    Body: function () {
      const svgImage = `<svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" width="700" height="700">
      <path d="M100 600 H 650" style="stroke:black;stroke-width:2"/>
      <polygon points="670,600 650,590 650,610" style="fill:black;stroke:black;stroke-width:1" />
      <text x="620" y="630" style="font: italic 36px sans-serif">p</text>
      <text x="70" y="630" style="font: italic 36px sans-serif">0</text>
      <path d="M100 500 H 600" style="stroke:black;stroke-width:1"/>
      <path d="M100 400 H 600" style="stroke:black;stroke-width:1"/>
      <path d="M100 300 H 600" style="stroke:black;stroke-width:1"/>
      <path d="M100 200 H 600" style="stroke:black;stroke-width:1"/>
      <path d="M100 100 H 600" style="stroke:black;stroke-width:1"/>
      <path d="M100 50 V 600" style="stroke:black;stroke-width:2"/>
      <polygon points="100,30 90,50 110,50" style="fill:black;stroke:black;stroke-width:1" />
      <text x="60" y="60" style="font: italic 36px sans-serif">T</text>
      <path d="M200 100 V 600" style="stroke:black;stroke-width:1"/>
      <path d="M300 100 V 600" style="stroke:black;stroke-width:1"/>
      <path d="M400 100 V 600" style="stroke:black;stroke-width:1"/>
      <path d="M500 100 V 600" style="stroke:black;stroke-width:1"/>
      <path d="M600 100 V 600" style="stroke:black;stroke-width:1"/>
      <circle cx="300" cy="500" r="5" style="fill:red;stroke:black;stroke-width:1" />
      <text x="270" y="480" style="font: italic 36px sans-serif">2</text>
      <circle cx="600" cy="100" r="5" style="fill:red;stroke:black;stroke-width:1" />
      <text x="570" y="90" style="font: italic 36px sans-serif">1</text>
    </svg>`;
      const imageSvg = {
        width: "250px",
        height: "250px",
        transition: "5s",
      };
      return (
        <div className="quest">
          <div className="quest__ans__group">
            <img
              style={imageSvg}
              alt="sdfg"
              src={`data:image/svg+xml;utf8,${svgImage}`}
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
                <input className="quest__input" type="text" placeholder=" " />
                <label className="quest__label">Ответ</label>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_009",
    Body: function () {
      return (
        <div className="quest">
          <div className="quest__body">
            Температура нагревателя тепловой машины 900 К, температура
            холодильника на 300 К меньше, чем у нагревателя. Каков максимально
            возможный КПД машины? (Ответ дайте в процентах, округлив до целых.)
          </div>
          <div className="quest__group">
            <input className="quest__input" type="text" placeholder=" " />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_010",
    Body: function () {
      return (
        <div className="quest">
          <div className="quest__body">
            На рисунке показан график изменения температуры вещества по мере
            поглощения им количества теплоты. Вещество находится в сосуде под
            поршнем. Масса вещества равна 0,5 кг. Первоначально вещество было в
            жидком состоянии. Какова удельная теплота парообразования вещества?
            Ответ дайте в кДж/кг.
          </div>
          <div className="quest__group">
            <input className="quest__input" type="text" placeholder=" " />
            <label className="quest__label">Ответ</label>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_011",
    Body: function () {
      return (
        <div className="quest">
          <div className="quest__body">
            Два моля одноатомного идеального газа участвуют в циклическом
            процессе, график которого изображён на UV-диаграмме (U — внутренняя
            энергия газа, V — его объём). Выберите два верных утверждения на
            основании анализа представленного графика.
            <ol>
              <li>В процессе 1–2 газ адиабатно нагревается.</li>
              <li>В процессе 2–3 температура газа не изменяется.</li>
              <li>В процессе 3–4 газ получает некоторое количество теплоты.</li>
              <li>В процессе 4–1 работа газа равна нулю.</li>
              <li>
                В процессе 1–2 газ получает количество теплоты, равное 200 Дж.
              </li>
            </ol>
          </div>
          <div className="quest__ans__group">
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Утверждение 1</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Утверждение 2</label>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_012",
    Body: function () {
      return (
        <div className="quest">
          <div className="quest__body">
            Идеальный одноатомный газ переходит из состояния 1 в состояние 2
            (см. диаграмму). Масса газа не меняется. Как меняются в ходе
            указанного на диаграмме процесса давление газа, его объем и
            внутренняя энергия? Для каждой величины определите соответствующий
            характер изменения:
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
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Давление</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Объем</label>
            </div>
            <div className="quest__group">
              <input className="quest__input" type="text" placeholder=" " />
              <label className="quest__label">Внутренняя энергия</label>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    key: "f_001_013",
    Body: function () {
      const b1 = useRef(null);
      const b2 = useRef(null);
      const b3 = useRef(null);
      const b4 = useRef(null);
      const answerSelect = (e) => {
        [b1, b2, b3, b4].forEach((btn) => (btn.current.className = ""));
        e.target.className = "selected";
      };
      return (
        <div className="quest">
          <div className="quest__body">
            <MathJax math="Протон p влетает в зазор между полюсами электромагнита с горизонтальной скоростью  `\vec{v}` лежащей в плоскости рисунка. Вектор индукции `\vec{B}`  магнитного поля направлен вертикально. Куда направлена действующая на протон сила Лоренца?" />
          </div>
          <div className="quest__ans__group">
            <div className="quest__vgroup">
              <MathJax math="`\otimes`" />
              <button onClick={answerSelect} ref={b1}>
                от наблюдателя за плоскость рисунка
              </button>
            </div>
            <div className="quest__vgroup">
              <MathJax math="`\odot`" />
              <button onClick={answerSelect} ref={b2}>
                к наблюдателю из-за плоскости рисунка
              </button>
            </div>
            <div className="quest__vgroup">
              <MathJax math="`\rightarrow`" />
              <button onClick={answerSelect} ref={b3}>
                горизонтально вправо в плоскости рисунка
              </button>
            </div>
            <div className="quest__vgroup">
              <MathJax math="`\leftarrow`" />
              <button onClick={answerSelect} ref={b4}>
                горизонтально влево в плоскости рисунка
              </button>
            </div>
          </div>
        </div>
      );
    },
  },
];
