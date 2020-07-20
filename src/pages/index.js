import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Layout, Home, About, Services, Community, Contact } from "@components"

const IndexPage = ({ location, data }) => {
    return (
        <Layout>
            <Home data={data.home.edges} />
            <About data={data.about.edges} profiles={data.profiles.edges} />
            <Services data={data.services.edges} />
            <Community data={data.community.edges} />
            <Contact data={data.contact.edges} />
        </Layout>
    )
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
    {
        home: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/home/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        subtitle
                        title
                        action
                    }
                }
            }
        }
        about: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/about/*.md" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                    }
                    html
                }
            }
        }
        profiles: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/about/profiles/*md" } }
        ) {
            edges {
                node {
                    frontmatter {
                        name
                        degree
                        image {
                            childImageSharp {
                                fluid(maxWidth: 700, quality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        alt
                        resume {
                            publicURL
                        }
                        social {
                            link
                            icon
                        }
                    }
                }
            }
        }
        services: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        content {
                            description
                            key
                        }
                    }
                }
            }
        }
        community: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/community/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        link
                        icon
                        image {
                            childImageSharp {
                                fluid(maxWidth: 700, quality: 90) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        alt
                    }
                    html
                }
            }
        }
        contact: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/contact/" } }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        subtitle
                        action
                    }
                    html
                }
            }
        }
    }
`
