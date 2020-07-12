import React from "react"
import PropTypes from "prop-types"
import { GithubIcon, LinkedinIcon, XingIcon } from "@components/icons"

const FormattedIcon = ({ name }) => {
    switch (name) {
        case "github":
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
