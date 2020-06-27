import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>DONDE</h3>
          <span>65 Avenida bella</span>
          <span>Benicarlo, 24 003</span>
        </div>
        <div className="hours">
          <h3>HORARIOS</h3>
          <span>mié - jue - vie / 11h-15h</span>
          <span>sab - dom / 10h - 16h</span>
        </div>
        <div className="contact">
          <h3>CONTACTO</h3>
          <span>07 30 12 82 24</span>
          <span>@ElGustoAzador</span>
        </div>
      </section>
      {/* <p>Built by
        <a href="https://crollacreations.com" target="_blank" rel="noopener noreferrer">crollacreations</a>
      </p> */}
    </footer>
  )
}

export default Footer;