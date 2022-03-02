import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import vrPlayer1sig from "../../content/assets/vrPlayer1sig.gif"

class Main extends React.Component {
  render() {
    const { data, children } = this.props
    console.log(this.props)
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <SEO title={siteTitle} />
        <div>
          <img
            src={vrPlayer1sig}
            alt="soggy ink logo with wet ink in the background"
            style={{ margin: "50px" }}
          ></img>
        </div>
        <div></div>
      </Layout>
    )
  }
}

export default Main

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
