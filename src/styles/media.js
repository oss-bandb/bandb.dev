const media = {
    small: "575px",
    medium: "768px",
    large: "992px",
    xlarge: "1200px",
}

const device = {
    smallUp: `(min-width: ${media.small})`,
    mediumUp: `(min-width: ${media.medium})`,
    largeUp: `(min-width: ${media.large})`,
    xlargeUp: `(min-width: ${media.xlarge})`,
    smallDown: `(max-width: ${media.small})`,
    mediumDown: `(max-width: ${media.medium})`,
    largeDown: `(max-width: ${media.large})`,
    xlargeDown: `(max-width: ${media.xlarge})`,
}

export default media
export { device }
