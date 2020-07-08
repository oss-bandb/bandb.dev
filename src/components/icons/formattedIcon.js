import React from "react"
import PropTypes from "prop-types"
import { GithubIcon, LinkedinIcon, XingIcon } from "@components/icons"

const FormattedIcon = ({ name }) => {
    console.log("name", name)
    switch (name) {
        case "github":
            console.log("github")
            return <GithubIcon />
        case "linkedin":
            return <LinkedinIcon />
        case "xing":
            return <XingIcon />
    }
}

FormattedIcon.propType = {
    name: PropTypes.string.isRequired,
}

export default FormattedIcon
