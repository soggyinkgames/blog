import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import vrPlayer1sig from "../../content/assets/vrPlayer1sig.gif"
// import styles from "src/utils/css/components/vision.css"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

const VisionPage = ({ data }, location) => {
  Splitting({
    whitespace: true,
  })
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Vision"
        keywords={[
          `blog`,
          `soggy-ink-games`,
          `javascript`,
          `react`,
          "soggy ink games",
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="vision">Our Vision</h2>

          <h3>Yes you can!</h3>
          <p>It all starts with an idea. It's a big idea...</p>
          <p>
            I want to help you memorize anything you want, and have fun doing
            it.
          </p>
          <p>
            Why? That's easy, innovation, progress, equality, to build, create
            and engineer something that will help people on the path to
            actualize their dreams.
          </p>
          <p>
            Because <b>you are smart enough.</b>
          </p>

          <p splitting className="char" id="wee">
            You are the wave.
          </p>
          <br></br>
          <img
            src={vrPlayer1sig}
            alt="soggy ink logo with wet ink in the background"
            style={{ margin: "50px" }}
          ></img>
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
    benchAccounting: file(relativePath: { eq: "soggy-ink.png" }) {
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
