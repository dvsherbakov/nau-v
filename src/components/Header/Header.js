import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
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
        </div>
      </div>
    </header>
  )
}
