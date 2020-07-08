import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Layout, Home, About, Services, Community, Contact } from "@components"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const IndexPage = ({ location, data }) => {
    return (
        <Layout>
            <StyledContainer>
                <Home data={data.home.edges} />
                <About data={data.about.edges} profiles={data.profiles.edges} />
                <Services data={data.services.edges} />
                <Community />
                <Contact />
            </StyledContainer>
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
                        title
                        social {
                            github
                            xing
                            linkedin
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
    }
`
