/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
    <h1>
    Go Lakey
    </h1>
    <h2>
  Some History
    </h2>
    <p>
    The Lakeland Terrier, also known as the Patterdale Terrier, a member of the Terrier Family. They were used to hunt foxes and otters, in Lake District, England, which is how they got their names.
    </p>
    <h2>
    Coat
    </h2>
    <p>
    The Lakeland Terrier's coat, as a puppy, is soft. However, around two months, wire starts to come in. The soft coat should then be plucked out. If you do not like the wirey coat, you should not pluck it, and instead use clippers. If you do clipper it, the wire will go away forever.
    </p>
    </div>
  )
}

export default Bio
