import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import {
    Layout,
    Home,
    About,
    Services,
    Community,
    Contact,
    Projects,
} from "@components"

const IndexPage = ({ data }) => {
    const {
        home,
        about,
        profiles,
        projects,
        services,
        community,
        contact,
        navigation,
    } = data

    return (
        <Layout navItems={navigation.items}>
            <Home data={home.edges} />
            <About data={about.edges} profiles={profiles.edges} />
            <Projects projects={projects.edges} />
            <Services data={services.edges} />
            <Community data={community.edges} />
            <Contact data={contact.edges} />
        </Layout>
    )
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
}

export default injectIntl(IndexPage)

export const query = graphql`
    query IndexData($language: String) {
        navigation: dataYaml(fields: { language: { eq: $language } }) {
            items {
                key
                name
                to
                main
            }
        }
        home: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/home/" }
                fields: { language: { eq: $language } }
            }
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
            filter: {
                fileAbsolutePath: { glob: "**/about/*.md" }
                fields: { language: { eq: $language } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        skills
                    }
                    html
                }
            }
        }
        profiles: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/about/profiles/*md" }
                fields: { language: { eq: $language } }
            }
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
        projects: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/about/projects/**/*md" }
                fields: { language: { eq: $language } }
            }
            sort: { fields: frontmatter___id, order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        skills
                        title
                        range
                        location
                    }
                    html
                }
            }
        }
        services: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/services/" }
                fields: { language: { eq: $language } }
            }
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
            filter: {
                fileAbsolutePath: { regex: "/community/" }
                fields: { language: { eq: $language } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        content {
                            key
                            link
                            icon
                            description
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 700, quality: 90) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                            alt
                        }
                        
                    }
                }
            }
        }
        contact: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/contact/" }
                fields: { language: { eq: $language } }
            }
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
