import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import SoggyInkGamesGif from "../../content/assets/SoggyInkGamesGif.gif"

const VisionPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Vision" keywords={[`blog`, `soggy-ink-games`, `javascript`, `react`, 'soggy ink games']} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="vision">
            Elevating in this saturated environment, soggy from the waves, learning with every failure and from the ashes WE RISE
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Image By Anaizing Design</figcaption>
          </figure>
          <h3 id="vision">Vision</h3>
          <p>
            It all starts with an idea. It's a big idea, so to get to the WHAT I will first break  down the HOW into actionable steps, to be repeated and perfected.
          </p>
          <p>
            The WHY is easy, innovation, progress, equality, to build, create and engineer something that will help people and HAVE FUN doing it.
            The path to actualize that dream starts here.
          </p>
          <p>
            The WHAT?
          </p>
          <p>
            Absolutely
          </p>
          <br></br> 
          <br></br>
          <br></br>
          <br></br> 
          <br></br>
          <br></br>
          <br></br> 
          <img src={SoggyInkGamesGif} alt="soggy ink logo with wet ink in the background" style={{margin: '50px'}} ></img>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "SoggyInkLogoM.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <VisionPage location={props.location} data={data} {...props} />
    )}
  />
)
