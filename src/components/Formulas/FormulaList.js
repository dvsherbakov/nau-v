import React from 'react'
import MathJax from 'react-mathjax-preview'

export const FormulasList = [
  {
    keyId: '1010101',
    fClass: 7,
    name: 'Скорость',
    body: <MathJax math="`v=S/t`" />,
    description: (
      <>
        <MathJax math="`v` - скорость" />
        <MathJax math="`S` - путь" />
        <MathJax math="`t` - время" />
      </>
    ),
    dimendions: (
      <>
        <MathJax math="`м/с`" />
        <div>м</div>
        <div>с</div>
      </>
    ),
  },
  {
    keyId: '1010102',
    fClass: 7,
    name: 'Плотность',
    body: <MathJax math="`\rho=m/V`" />,
    description: (
      <>
        <MathJax math="`\rho` - плотность" />
        <MathJax math="`m` - масса" />
        <MathJax math="`V` - объем" />
      </>
    ),
    dimendions: (
      <>
        <MathJax math="`\text{кг}/{м^3}`" />
        <MathJax math="`\text{кг}`" />
        <MathJax math="`м^3`" />
      </>
    ),
  },
  {
    keyId: '1010103',
    fClass: 7,
    name: 'Сила тяжести',
    body: <MathJax math="`F=m\cdotg`" />,
    description: (
      <>
        <div>F - сила</div>
        <div>m - масса</div>
        <div>g - ускорение свободного падения</div>
      </>
    ),
    dimendions: (
      <>
        <div>Н</div>
        <MathJax math="`\text{кг}`" />
        <MathJax math="`Н/\text{кг}`" />
      </>
    ),
  },
  {
    keyId: '1010104',
    fClass: 7,
    name: 'Сила упругости',
    body: <MathJax math="`F_{упр}=k\cdotx`" />,
    description: (
      <>
        <MathJax math="`F_{упр}` - сила упругости" />
        <MathJax math="`k` - жёсткость тела" />
        <div>x - удлиннение тела</div>
      </>
    ),
    dimendions: (
      <>
        <div>H</div>
        <MathJax math="`Н/м`" />
        <div>M</div>
      </>
    ),
  },
  {
    keyId: '1010105',
    fClass: 7,
    name: 'Вес тела, Вес тела в жидкости',
    body: (
      <>
        <MathJax math="`P=m\cdotg`" />
        <MathJax math="`P=F_m-F_a`" />{' '}
      </>
    ),
    description: (
      <>
        <div>P - вес</div>
        <div>m - масса</div>
        <div>g - ускорение свободного падения</div>
      </>
    ),
    dimendions: (
      <>
        <div>H</div>
        <div>кг</div>
        <MathJax math="`Н/\text{кг}`" />
      </>
    ),
  },
  {
    keyId: '1010106',
    fClass: 7,
    name: 'Давление',
    body: (
      <>
        <MathJax math="`p=F/S`" />
      </>
    ),
    description: (
      <>
        <MathJax math="`p` - давление" />
        <div>F - сила</div>
        <div>S - площадь</div>
      </>
    ),
    dimendions: (
      <>
        <div>Па</div>
        <div>Н</div>
        <div>М</div>
      </>
    ),
  },
  {
    keyId: '1010107',
    fClass: 7,
    name: 'Давление в жидкости (газе)',
    body: (
      <>
        <MathJax math="`p=\rho\cdotg\cdoth`" />
        <MathJax math="`p=p_a+\rho\cdotg\cdoth`" />
        <MathJax math="`p_a=10^5`Па" />
      </>
    ),
    description: (
      <>
        <MathJax math="`p` - давление" />
        <MathJax math="`\rho` - плотность жидкости" />
        <MathJax math="`g` - ускорение свободного падения" />
        <MathJax math="`h` - высота столба жидкости" />
        <MathJax math="`p_a` - нормальное атмосферное давление" />
      </>
    ),
    dimendions: (
      <>
        <div>Па</div>
        <MathJax math="`\text{кг}/{м^3}`" />
        <MathJax math="`Н/\text{кг}`" />
        <div>м</div>
        <div>Па</div>
      </>
    ),
  },
  {
    keyId: '1010108',
    fClass: 7,
    name: 'Зависимость давления воздуха от высоты',
    body: (
      <>
        <MathJax math="`p=p_a-h/12`" />
      </>
    ),
    description: (
      <>
        <div>p - давление</div>
        <div>h - высота</div>
        <MathJax math="`p_a` - нормальное атмосферное давление" />
      </>
    ),
    dimendions: (
      <>
        <div>Па</div>
        <div>м</div>
        <div>Па</div>
      </>
    ),
  },
  {
    keyId: '1010109',
    fClass: 7,
    name: 'Площадь',
    body: (
      <>
        <MathJax math="`S=l\cdota`" />
      </>
    ),
    description: (
      <>
        <div>S - площадь</div>
        <div>l - длинна</div>
        <div>a - ширина</div>
      </>
    ),
    dimendions: (
      <>
        <div>м</div>
        <div>м</div>
        <div>м</div>
      </>
    ),
  },
  {
    keyId: '1010110',
    fClass: 7,
    name: 'Объем',
    body: (
      <>
        <MathJax math="`V=S\cdoth`" />
      </>
    ),
    description: (
      <>
        <div>V - объем</div>
        <div>S - площадь</div>
        <div>h - высота</div>
      </>
    ),
    dimendions: (
      <>
        <MathJax math="`м^3`" />
        <MathJax math="`м^2`" />
        <div>м</div>
      </>
    ),
  },
  {
    keyId: '1010111',
    fClass: 7,
    name: 'Архимедова сила',
    body: (
      <>
        <MathJax math="`F_a=\rho\cdotg\cdotV`" />
      </>
    ),
    description: (
      <>
        <MathJax math="`F_a` - архимедова сила" />
        <MathJax math="`\rho` - плотность жидкости" />
        <div>g - ускорение свободного падения</div>
        <div>V - объем тела</div>
      </>
    ),
    dimendions: (
      <>
        <div>Н</div>
        <MathJax math="`\text{кг}/м^3`" />
        <MathJax math="`Н/\text{кг}`" />
        <MathJax math="`м^3`" />
      </>
    ),
  },
  {
    keyId: '1010112',
    fClass: 7,
    name: 'Сила трения',
    body: (
      <>
        <MathJax math="`F_\text{тр}=\mu\cdotP`" />
      </>
    ),
    description: (
      <>
        <MathJax math="`F_\text{тр}` - сила трения" />
        <div>P - вес тела</div>
        <MathJax math="`\mu` - коэффициент трения" />
      </>
    ),
    dimendions: (
      <>
        <div>Н</div>
        <div>Н</div>
        <div>-</div>
      </>
    ),
  },
  {
    keyId: '1010113',
    fClass: 7,
    name: 'Работа',
    body: (
      <>
        <MathJax math="`A=F\cdot s`" />
      </>
    ),
    description: (
      <>
        <div>A - работа</div>
        <div>F - сила</div>
        <div>s - путь</div>
      </>
    ),
    dimendions: (
      <>
        <div>Дж</div>
        <div>Н</div>
        <div>м</div>
      </>
    ),
  },
  {
    keyId: '1010114',
    fClass: 7,
    name: 'Мощность',
    body: (
      <>
        <MathJax math="`N=A/t`" />
      </>
    ),
    description: (
      <>
        <div>N - мощность</div>
        <div>A - работа</div>
        <div>t - время</div>
      </>
    ),
    dimendions: (
      <>
        <div>Вт</div>
        <div>Дж</div>
        <div>с</div>
      </>
    ),
  },
  {
    keyId: '1010115',
    fClass: 7,
    name: 'Момент силы',
    body: (
      <>
        <MathJax math="`M=F\cdotl`" />
      </>
    ),
    description: (
      <>
        <div>M - момнет силы</div>
        <div>F - сила</div>
        <div>l - плечо силы</div>
      </>
    ),
    dimendions: (
      <>
        <MathJax math="`Н\cdotм`" />
        <div>Н</div>
        <div>м</div>
      </>
    ),
  },
]
