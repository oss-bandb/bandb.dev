export const splitGithubInfo = link => {
    const delimiter = "/"
    const split = link.split(delimiter)
    const info = split.slice(split.length - 2).join(delimiter)
    return info
}