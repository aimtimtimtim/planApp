import './Footer.scss'
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Design by Tim 2023</p>
      <div className="footer__project">
        <p className="footer__desc">First React project</p>
        <img
          className="footer__react-logo"
          src="/images/react_icon.svg"
          alt=""
        />
      </div>
    </footer>
  )
}
