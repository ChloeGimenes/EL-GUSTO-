import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Menu from '../components/menu/menu'
import Instagram from '../components/instagram'
import LeafletMap from '../components/leafletMap'
import Footer from '../components/footer'
import "react-scroll-to-top/lib/index.css"
import ScrollToTop from "react-scroll-to-top";

const IndexPage = ({data}) => {

return (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <Img fluid={data.devanture2.childImageSharp.fluid} className="hero-image"/>
    </section>
    <ScrollToTop smooth="true"/>
    <section className="container">
      <span className="description">
        El mejor pollo asado para llevar !
      </span>
      <div className="gallery-grid">
        <Img fluid={data.roasting.childImageSharp.fluid} className="gallery-img1"/>
        <Img fluid={data.potatoe.childImageSharp.fluid} className="gallery-img2"/>
        <Img fluid={data.man.childImageSharp.fluid} className="gallery-img3"/>
      </div>
      <div className="about-grid">
        <h2>LO QUE MAS ME IMPORTA ES EL GUSTO</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    <div className="parallax"></div>
    <section className="container">
      <Menu />
      <Instagram />
    </section>
    {typeof window !== 'undefined' &&
      <LeafletMap
        position={[40.420809, 0.424931]} // Your Coordinates
        zoom={15} // Zoom Level
        markerText={"El Gusto, 31 avenida pollo"} // Icon text
      />
    }
    <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    devanture2: file(relativePath: { eq: "devanture2.png" }) {
      ...fluidImage
    }
    man: file(relativePath: { eq: "man.png" }) {
      ...fluidImage
    }
    roasting: file(relativePath: { eq: "roasting3.png" }) {
      ...fluidImage
    }
    potatoe: file(relativePath: { eq: "potatoe.jpg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage
