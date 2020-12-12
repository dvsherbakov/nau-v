import React from 'react'
import MathJax from 'react-mathjax-preview'

export const exersizes = [
  {
    tags: ['Законы сохранения', 'Фазовые переходы'],
    klass: 8,
    id: '001_001',
    element: (
      <div>
        Свинцовая пуля, летящая со скоростью 400 м/с, попадает в стенку и
        застревает в ней, при этом 20% кинетической энергии пули идет на ее
        нагревание. На сколько градусов нагрелась пуля? Удельная теплоемкость
        свинца 130 Дж/(кг×°С).
      </div>
    ),
  },
  {
    tags: ['Законы сохранения'],
    klass: 8,
    id: '001_002',
    element: (
      <div>
        Свинцовая дробинка, летящая со скоростью 100 м/с, попадает в доску и
        застревает в ней, 52% кинетической энергии дробинки идет на ее
        нагревание. На сколько градусов нагрелась дробинка? Удельная
        теплоемкость свинца 130 Дж/(кг×°С).
      </div>
    ),
  },
  {
    tags: ['Законы сохранения'],
    klass: 8,
    id: '001_003',
    element: (
      <div>
        Молот массой 2 т падает на стальную болванку массой 1 кг с высоты 3 м.
        На сколько градусов нагреется болванка при ударе, если на нагревание
        идет 50% всей энергии молота? Удельная теплоемкость стали 460
        Дж/(кг×°С).
      </div>
    ),
  },
  {
    tags: ['Законы сохранения'],
    klass: 8,
    id: '002_001',
    element: (
      <div>
        На сколько градусов температура воды больше у основания водопада высотой
        21 м, чем у вершины? Считайте, что вся механическая энергия идет на
        нагревание воды. Удельная теплоемкость воды 4200 Дж/(кг×°С).
      </div>
    ),
  },
  {
    tags: ['Законы сохранения'],
    klass: 8,
    id: '002_002',
    element: (
      <div>
        Свинцовая пуля, летевшая со скоростью 500 м/с, пробила стенку.
        Определите, на сколько градусов нагрелась пуля, если после вылета из
        стенки скорость пули снизилась до 400 м/с. Считайте, что на нагревание
        пошло 50% выделившейся теплоты. Удельная теплоемкость свинца 130
        Дж/(кг×°С).
      </div>
    ),
  },
  {
    tags: ['Законы сохранения'],
    klass: 8,
    id: '002_003',
    text:
      'Чему равна скорость пули массой 12 г, если при выстреле сгорает 2,4 г пороха? Удельная теплота сгорания пороха  3,8× Дж/кг. КПД карабина 25%.',
  },
  {
    tags: ['Фазовые переходы'],
    klass: 9,
    id: '004_001',
    text:
      'Из 450 г водяного пара с температурой 373 К образовалась вода. Сколько теплоты при этом выделилось?',
  },
  {
    tags: ['Сила Ампера'],
    klass: 10,
    id: '005_001',
    text:
      'Проводник с током 21 А и длиной 0,4 м перемещается в однородном магнитном поле с индукцией 1,2 Тл перпендикулярно к линиям индукции на расстояние 0,25 м. Какая при этом совершится работа?',
  },
  {
    tags: ['Колебания и волны'],
    klass: 9,
    id: '090_211',
    text:
      'За какой промежуток времени маятник, совершающий гармонические колебания по закону синуса, отклонится от положения равновесия на половину амплитуды? Период колебаний 6 с, начальная фаза равна нулю.',
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_102',
    element: (
      <div>
        <MathJax
          math="Лыжник спускается с горы с начальной скоростью 6 `м/с` и ускорением 0.5
        `м/с^2`. Какова длинна горы, если спуск с нее продолжался `12с`?"
        />
      </div>
    ),
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_103',
    element: (
      <div>
        <MathJax
          math="Автобус движется со скоростью 54 `\frac{км}{ч}`. На каком расстоянии от остановки
        водитель должен начать торможение, если для удобства пассажиров
        ускорение не должно превышать 1,2 `м/с^2`"
        />
      </div>
    ),
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_104',
    element: (
      <div>
        <MathJax
          math="Координата движущегося тела с течением времени меняется по следующему
        закону: `x=-1+3·t-t^2`. Определите начальную координату тела, поекцию начальной скорости и
        проекцию ускорения. Укажите характер движения тела."
        />
      </div>
    ),
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_105',
    text:
      'Троллейбус двигался со скоростью 18 км/ч и, затормозив, остановился через 4с. Определите ускорение и тормозной путь тролейбуса.',
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_106',
    text:
      'Самолету для взлета нужно приобрести скорость, равную 252 км/ч. Сколько времени длиться разгон, если эта скорость достигается в конце взлетной полосы длинной 980м?',
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_107',
    element: (
      <div>
        <MathJax
          math="Два автомобиля выезжают из одного пункта в одном направлении. 
        Первый автомобиль выезжает на 20 с позже другого. 
        Оба движуться с одинаковым ускорением, равным `0,4 м/с^2`. 
        Через сколько времени, считая от начала движения первого автомобиля, 
        расстояние между ними окажеться равным 240м?"
        />
      </div>
    ),
  },
  {
    tags: ['Кинематика'],
    klass: 9,
    id: '291_108',
    text:
      'С каким ускорением движеться тело, если за шестую секунду этого движения оно прошло путь, равный 11м? Начальная скорость движения равна нулю.',
  },
  {
    tags: ['Свободное падение'],
    klass: 9,
    id: '284_601',
    text:
      'Камень упал на дно колодца. Падение камня длилось 3с. Какая глубина колодца? Какова конечная скорость камня?',
  },
  {
    tags: ['Свободное падение'],
    klass: 9,
    id: '284_602',
    text:
      'Стрела, выпущенная из лука вертикально вверх с начальной скоростью 20 м/с, достигла максимальной высоты за 2 с. На какую высоту долетела стрела? Через сколько секунд она упадет на землю?',
  },
]
