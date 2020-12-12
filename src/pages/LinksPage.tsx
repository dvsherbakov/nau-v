import React from 'react'
import { Links, Formulas } from '../components/Links/index'
import { ScrollButtons } from '../components/ScrollButtons'

export const LinksPage = () => {
  return (
    <div className="container">
      <h1>Ссылки и справочная информация</h1>
      <Formulas />
      <Links />
      <ScrollButtons />
    </div>
  )
}
