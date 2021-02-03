import React from 'react'
import { UserInfo } from '../UserInfo/UserInfo'

import './header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__content-inner">
          <div className="header__contacts">
            <a className="header__phone" href="tel:+79129221234">
              +7 912 922 12 34
            </a>
            <a
              className="header__email"
              href="email:vacheslavnaumenko@mail.com"
            >
              vacheslavnaumenko@mail.com
            </a>
          </div>
          <div>
            <UserInfo />
          </div>
        </div>
      </div>
    </header>
  )
}
