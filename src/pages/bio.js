/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import vrPlayer1sig from "../../content/assets/vrPlayer1sig.gif"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, title } = data.site.siteMetadata
        // const siteTitle = data.site.siteMetadata.title
        return (
          <Layout title={title}>
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
                <h2 id="vision">Yes you can!</h2>

                <h3 id="bio">Who are we?</h3>
                <p>
                  Hi Im Anaizing I care! Seeing you're here chances are, we have
                  a lot in common. I am a self taught software engineer, and for
                  the last few years have been building a platform used by over
                  500,000 higher ed students to help them succeed in learning
                  via new interactive ways. However I'm not here to talk about
                  that. I am the founder of Soggy Ink Games. A studio dedicated
                  to help you reach you potential and have fun doing it
                </p>
                <p>
                  Written by <strong>{author}</strong> who lives and works in
                  Sydney building useful things.
                  {` `}
                  <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow her on Twitter
                  </a>
                </p>
                <p>
                  It all starts with an idea. It's a big idea, so to get to the
                  WHAT I will first break down the HOW into actionable steps, to
                  be repeated and perfected.
                </p>
                <p>
                  The WHY is easy, innovation, progress, equality, to build,
                  create and engineer something that will help people and HAVE
                  FUN doing it. The path to actualize that dream starts here.
                </p>
                <p>The WHAT?</p>
                <p>Absolutely</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/soggy-ink.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
