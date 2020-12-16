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
]
