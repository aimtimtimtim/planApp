import './News.scss'
import React, { useRef } from 'react'
export default function News({ toggleNews }) {
  const pop = useRef(null)

  function closePop() {
    pop.current.classList.add('move-top')
    setTimeout(() => {
      toggleNews()
    }, 500)
  }
  return (
    <div className="modal">
      <div className="modal__pop" ref={pop}>
        <h2>Updates of YourPlan</h2>
        <div className="modal__update">
          <h4 className="modal__update-title">Version 1.00.1</h4>
          <p className="modal__update-desc">
            Now you can save your todo! Also we added saving time.
          </p>
        </div>

        <div className="modal__btn-area">
          <button className="modal__close" onClick={closePop}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
