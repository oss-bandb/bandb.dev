const media = {
    small: "575px",
    medium: "768px",
    large: "992px",
    xlarge: "1200px",
}

const device = {
    smallUp: `screen and (min-width: ${media.small})`,
    mediumUp: `screen and (min-width: ${media.medium})`,
    largeUp: `screen and (min-width: ${media.large})`,
    xlargeUp: `screen and (min-width: ${media.xlarge})`,
    smallDown: `screen and (max-width: ${media.small})`,
    mediumDown: `screen and (max-width: ${media.medium})`,
    largeDown: `screen and (max-width: ${media.large})`,
    xlargeDown: `screen and (max-width: ${media.xlarge})`,
}

export default media
export { device }
