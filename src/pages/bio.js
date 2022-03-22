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
import playerOne from "../../content/assets/playerOne.gif"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, title } = data.site.siteMetadata
        // const siteTitle = data.site.siteMetadata.title
        return (
          <Layout title={"Soggy ink games"}>
            <SEO
              title="Bio"
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
                <h2 id="bio">introducing the soggy ink team</h2>

                <p>
                  Hi, Im Anai, founder of Soggy Ink Games, and Im here to change
                  the game!
                  <br></br>
                  Seeing you're here chances are, we have a few things in
                  common... (big dreams, ideas, high achiever continuously
                  battling impostor syndrome)
                </p>
                <p>
                  I am a self taught software engineer, and for the last few
                  years have been building a platform used by over 500,000
                  higher ed students to help them succeed in learning via new
                  interactive ways. However I'm not here to talk about that.{" "}
                </p>
                <p>
                  I want to see everyone thrive, I want you to believe in
                  yourself, have fun and keep reaching higher than you ever
                  thought possible, to build your future, the future we all
                  deserve... while enjoying the present moment.
                </p>

                <p>Welcome to Soggy Ink games!</p>
                <p>
                  We are building a game to help you memorize anything you want.
                  We are dedicated to help you reach your potential, while
                  helping eradicate impostor syndrome, because learning should
                  be fun, and because <b>you are smart enough.</b>
                </p>
                <p>
                  The WHY is easy, equality, innovation, progress, to build,
                  create and engineer something that will help people and HAVE
                  FUN doing it. The path to actualize that dream starts here.
                </p>
                <p>To change the game?</p>
                <p>Absolutely</p>
                <br></br>

                <img
                  src={playerOne}
                  className="zoomzoom"
                  alt="soggy ink logo with wet ink in the background"
                  style={{ padding: "50px" }}
                ></img>
                <p>
                  Written by <strong>{author}</strong> who lives and works in
                  Sydney building useful things.
                  {` `}
                  <a href={`https://twitter.com/${social.twitter}`}>
                    You should follow her on Twitter
                  </a>
                </p>
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
