/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import pinkMe from "../../content/assets/pinkMe.jpg"
import playerOne from "../../content/assets/playerOne.gif"

const RoundWrapper = styled.div`
  border: 4px solid #fff;
  border-radius: 20px;
  padding: 30px;
  max-height: 80vh;
}
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
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
                  Hi, Im Anai, founder of Soggy Ink Games, building{" "}
                  <a href="/">EQUANIMOUS</a> and Im here to change the game!
                  <br></br>
                  Seeing you're here chances are, we have a few things in
                  common... (big dreams, bigger ideas, a high achiever
                  continuously battling impostor syndrome)
                </p>
                <p>
                  I am a self taught software engineer, who for the last few
                  years has been building a platform used by over 630,000 higher
                  ed students to help them succeed in their learning via new
                  interactive ways. However I'm not here to talk about that.
                </p>
                <RoundWrapper>
                  <img
                    src={pinkMe}
                    className="zoomzoom pinkMe"
                    alt="soggy ink logo with wet ink in the background"
                    style={{ margin: "0 70px 0 70px " }}
                  ></img>
                  Name: Anai Araya <br></br>
                  Role: Founder/CEO <br></br>
                  Fave Game: WoW <br></br>
                  Fave quote: "...Failure does not mean GAME OVER, it means try
                  again with EXPERIENCE"
                </RoundWrapper>
                <p>
                  I want to see everyone thrive, I want you to believe in
                  yourself, have fun and keep reaching higher than you ever
                  thought possible, to build your future, the one we all
                  deserve... while enjoying the present moment.
                </p>
                <p>
                  ...and I have a <a href="./vision">plan</a>
                </p>

                <p>Welcome to Soggy Ink games!</p>
                <br></br>
                <p>You are the wave.</p>
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
