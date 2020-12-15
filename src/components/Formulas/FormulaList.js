import React from 'react'
import MathJax from 'react-mathjax-preview'

export const FormulasList = [
  {
    key: '1010101',
    fClass: 7,
    name: 'Скорость',
    body: function () {
      return <MathJax math="`v=S/t`" />
    },
    description: function () {
      return (
        <div>
          <MathJax math="`v` - скорость" />
          <MathJax math="`S` - путь" />
          <MathJax math="`t` - время" />
        </div>
      )
    },
    dimendions: function () {
      return (
        <div>
          <MathJax math="`м/с`" />
          <MathJax math="`м`" />
          <MathJax math="`с`" />
        </div>
      )
    },
  },
  {
    key: '1010102',
    fClass: 7,
    name: 'Плотность',
    body: function () {
      return <MathJax math="`\rho=m/V`" />
    },
    description: function () {
      return (
        <div>
          <MathJax math="`\rho` - плотность" />
          <MathJax math="`m` - масса" />
          <MathJax math="`V` - объем" />
        </div>
      )
    },
    dimendions: function () {
      return (
        <div>
          <MathJax math="`\text{кг}/{м^3}`" />
          <MathJax math="`\text{кг}`" />
          <MathJax math="`м^3`" />
        </div>
      )
    },
  },
  {
    key: '1010102',
    fClass: 7,
    name: 'Сила тяжести',
    body: function () {
      return <MathJax math="`F=m\cdotg`" />
    },
    description: function () {
      return (
        <div>
          <MathJax math="`F` - сила" />
          <MathJax math="`m` - масса" />
          <MathJax math="`g` - ускорение свободного падения" />
        </div>
      )
    },
    dimendions: function () {
      return (
        <div>
          <MathJax math="`Н`" />
          <MathJax math="`\text{кг}`" />
          <MathJax math="`Н/\text{кг}`" />
        </div>
      )
    },
  },
]
