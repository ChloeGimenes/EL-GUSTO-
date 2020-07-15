import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <span className="siteTitle">{siteTitle}<p id="subTitle">- ASADOR -</p></span>
    <span id="header-infos">07 30 12 82 24<br/>65 Avenida bella, Benicarlo, 24 003</span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
