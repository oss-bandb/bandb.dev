import React from "react"
import { useIntl, injectIntl } from "gatsby-plugin-intl"

const NotFoundPage = () => {
    const intl = useIntl()
    return <div>{intl.formatMessage({ id: "notfound.message" })}</div>
}

export default injectIntl(NotFoundPage)
