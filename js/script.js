// animation Mercure
gsap.to("#mercury", {
    repeat: -1,
    duration: 2,
    motionPath: {
        path: "#motionPath-mercury path",
        align: "#motionPath-mercury path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        rotate: -90,
    },
    ease: "none",
});

// animation Venus
gsap.to("#venus", {
    duration: 3,
    repeat: -1,
    motionPath: {
        path: "#motionPath-venus path",
        align: "#motionPath-venus path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        rotate: -90,
    },
    ease: "none",
});

// animation Terre
gsap.to("#earth", {
    duration: 4,
    repeat: -1,
    motionPath: {
        path: "#motionPath-earth path",
        align: "#motionPath-earth path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        rotate: -90,
    },
    ease: "none",
});

// animation Mars
gsap.to("#mars", {
    duration: 5,
    repeat: -1,
    motionPath: {
        path: "#motionPath-mars path",
        align: "#motionPath-mars path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        rotate: -90,
    },
    ease: "none",
});

// animation Jupiter
gsap.to("#jupiter", {
    duration: 7,
    repeat: -1,
    motionPath: {
        path: "#motionPath-jupiter path",
        align: "#motionPath-jupiter path",
        alignOrigin: [0.5, 0.5],
    },
    ease: "none",
});

// animation Saturne
gsap.to("#saturn", {
    duration: 8,
    repeat: -1,
    motionPath: {
        path: "#motionPath-saturn path",
        align: "#motionPath-saturn path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    },
    ease: "none",
});

// animation Uranus
gsap.to("#uranus", {
    duration: 10,
    repeat: -1,
    motionPath: {
        path: "#motionPath-uranus path",
        align: "#motionPath-uranus path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    },
    ease: "none",
});

// animation Neptune
gsap.to("#neptune", {
    duration: 12,
    repeat: -1,
    motionPath: {
        path: "#motionPath-neptune path",
        align: "#motionPath-neptune path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    },
    ease: "none",
});

// ajout timeline pour un scroll trigger + un zoom et fondu pour le texte 
const timeline = gsap.timeline({
    // scroll
    scrollTrigger: {
        trigger: "#meteors",
        start: "top 10%",
        end: "bottom 0%",
        pin: true
    }
});

//zoom
timeline.to(".message-fin h1", {
    scale: 2,
    duration: 4,
});

//fondu 
timeline.to(".message-fin h1", {
    opacity: 0,
    duration: 4,
});