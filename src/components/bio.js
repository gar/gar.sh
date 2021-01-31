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
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="flex mb-20">
      <Image
        className="mr-4 mb-0 rounded-full"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          minWidth: 50,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in Cork,
        Ireland building useful things in Ruby and Elixir.
        {` `}
        <a
          className="text-blue-600"
          href={`https://twitter.com/${social.twitter}`}
        >
          You can find him on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
