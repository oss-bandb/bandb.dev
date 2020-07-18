import ScrollReveal from "scrollreveal"

const canScrollReveal = typeof window !== undefined
const scrollReveal = canScrollReveal ? ScrollReveal() : null

export default scrollReveal