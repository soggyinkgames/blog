import React from "react"
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
import vrPlayer1sig from "../../content/assets/vrPlayer1sig.gif"

const FormPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="SignUp"
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
          <h2 id="forms">Let me play</h2>
          <form
            method="POST"
            action="https://getform.io/f/c181023c-b611-4c8d-8084-d41f0977f5ca"
          >
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  placeholder="Email"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value> Why?</option>
                  <option value={1}>I want to Play test</option>
                  <option value={1}>Why not!</option>
                  <option value={1}>I want to work with soggy ink</option>
                  <option value={1}>I want to Invest</option>
                </select>
              </div>
              {/* Break 
            <div className="col-4 col-12-small">
              <input
                type="radio"
                id="demo-priority-low"
                name="demo-priority"
                defaultChecked
              />
              <label htmlFor="demo-priority-low">Low</label>
            </div>
            <div className="col-4 col-12-small">
              <input
                type="radio"
                id="demo-priority-normal"
                name="demo-priority"
              />
              <label htmlFor="demo-priority-normal">Normal</label>
            </div>
            <div className="col-4 col-12-small">
              <input
                type="radio"
                id="demo-priority-high"
                name="demo-priority"
              />
              <label htmlFor="demo-priority-high">High</label>
            </div>
             */}
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  defaultChecked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="If you could memorize anything, what would you choose?"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </article>
    </Layout>
  )
}

const signUpQuery = graphql`
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
    query={signUpQuery}
    render={data => (
      <FormPage location={props.location} data={data} {...props} />
    )}
  />
)
