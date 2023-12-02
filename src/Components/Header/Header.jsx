import News from './News/News'
import './Header.scss'

import React, { useRef, useState } from 'react'

export default function Header() {
  const [modal, setModal] = useState(false)
  function toggleNews() {
    setModal(!modal)
  }
  return (
    <header className="header">
      <a className="header__logo" href="#">
        YourPlan
      </a>
      <button className="header__news" onClick={toggleNews}>
        News
      </button>

      <div className="header__togithub">
        <a
          className="header__link"
          target="_blank"
          href="https://github.com/atdev03"
        >
          My GitHub
        </a>
        <img src="/images/github_icon.svg" alt="github logo" />
      </div>
      {modal && <News toggleNews={toggleNews} />}
    </header>
  )
}
