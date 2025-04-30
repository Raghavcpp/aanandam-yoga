const words = [
    "AYURVEDA",
    "ASANA",
    "MANTRA",
    "PRANAYAMA",
    "CHAKRA",
    "DRISHTI"
]
const imgpath = [
    "h2-showcase-img1.png",
    "h2-showcase-img2.png",
    "h2-showcase-img3.png",
    "h2-showcase-img4.png",
    "h2-showcase-img5.png",
]
const plan = [
    { name: "Basic", tagline: "Suitable for normal flexibility.", price: "$25" },
    { name: "Standard", tagline: "Suitable to grow steadily.", price: "$40" },
    { name: "Premium", tagline: "Suitable for core concepts.", price: "$50" },
];
const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Classes', path: 'classes' },
    { name: 'Testimonials', path: 'testimonials' },
    { name: 'Contact', path: 'contact' },
]
const Testimonial = [
    {
        name: "Alice",
        image: "testimonialPic1.png",
        comment: "Amazing flexibility and peaceful sessions. I feel recharged every day.",
        star: 4
    },
    {
        name: "Bob",
        image: "testimonialPic1.png",
        comment: "A life-changing experience with skilled trainers.",
        star: 5
    },
    {
        name: "Charlie",
        image: "testimonialPic1.png",
        comment: "I joined casually, but now I’m addicted to the calm.",
        star: 3
    },
    {
        name: "Diana",
        image: "testimonialPic1.png",
        comment: "The instructors are kind and the environment is relaxing.",
        star: 2
    },
];

export { words, imgpath, plan, navigation, Testimonial };