import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import playerOne from "../../content/assets/playerOne.gif"

const VisionPage = ({ data }, location) => {
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
          <h2 id="vision">Our not so soggy Vision</h2>

          <h3>Yes you can!</h3>
          <p>It all starts with an idea. It's a big idea...</p>
          <p>
            Memorizing things is hard and if you're cramming for an exam it can
            also be really stressful, so we are building{" "}
            <a href="/">EQUANIMOUS</a>, a game to help you memorize anything you
            want. We are dedicated to help you reach your potential, while
            helping eradicate impostor syndrome, because learning should be fun,
            and because
          </p>
          <p>
            <b>YOU ARE SMART ENOUGH.</b>
          </p>
          <p>
            Why? That's easy, equality, innovation, progress, to
            build/create/engineer something that will help people on the path to
            actualize their dreams, and HAVE FUN doing it.
          </p>
          <p>To change the game?</p>
          <p>Absolutely!</p>

          <p>
            If you could memorize anything, what would{" "}
            <a href="/form">you choose?</a>
          </p>

          <br></br>
          <img
            className="zoomzoom"
            src={playerOne}
            alt="soggy ink logo with wet ink in the background"
            style={{ padding: "50px" }}
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
