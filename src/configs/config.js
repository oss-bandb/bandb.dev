const config = {
    metadata: {
        siteTitle: "Block & Block | Freelance Android developers",
        siteDescription:
            "Block & Block is a freelancer association in the Ruhr area, which specializes in the development (and occasionally conception) of Android Apps.",
        siteUrl: "https://bandb.dev",
        siteLanguage: "en_US",
        googleTrackingId: "UA-145084202-1",
        googleVerification: "EL-OYOnS6PHp1JGCTYRXF8PxHIV3NISKGg9hHKc-Pac",
        // TODO language?
        keywords: [
            "Dennis Block",
            "Gregor Block",
            "Block und Block",
            "Block",
            "Android",
            "freelance",
            "software engineer",
            "app developer",
        ],
    },
    scrollReveal: (delay = 200) => ({
        origin: "bottom",
        distance: "50px",
        duration: 500,
        delay,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        mobile: true,
        reset: false,
        useDelay: "always",
        viewFactor: 0.25,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    }),
    scrollRevealDelay: 100,
}

export default config
