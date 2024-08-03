import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Point of Sale Desktop App',
        description: "My desktop POS application is designed to be user-friendly and efficient, making it a valuable tool for businesses of all sizes. With my application, retailers can easily process sales, manage inventory, track customer information, and generate reports.",
        tools: ['Python', 'Flask', 'Electron.js', 'Vue.js', 'Javascript', 'SQL', 'SwaggerUI', 'TailwindCSS'],
        // role: 'Full Stack Developer',
        code: 'https://github.com/EolNuha/point-of-sale-application',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sorting Virtualizer',
        description: 'The Sorting Visualizer is a fascinating project that I developed using popular web development technologies, such as Javascript, Vue.js, HTML, and CSS. It provides a practical way to learn about various sorting algorithms by creating a visual representation of their operation. Through its user-friendly and interactive interface, this project allows users to experiment with different sorting algorithms, visualize their performance and understand how each one works.',
        tools: ['Javascript', 'Vue.js', 'SCSS', 'Algorithms'],
        // role: 'Developer',
        code: 'https://github.com/EolNuha/eolnuha.github.io/blob/master/pages/projects/sorting-visualizer.vue',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'BiblioStack - Q&A Platform',
        description: `BiblioStack is a question and answer platform, with the options to upload documentation and images for all students and professionals in Kosovo. BiblioStack is run by users, you users ask the questions and other users will help you answer it. Each user has it’s own profile with his/her data (Full Name, Username, Email and a profile image). You can also search for different questions and make comments to that question anonymously without an account.`,
        tools: ['Python', 'Django', 'PostgreSQL', 'Javascript', 'CSS', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: 'https://github.com/EolNuha/bibliostack',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dinosaur Game',
        description: "Dino Game is a replica of the chrome dinosaur game, built with Python and Pygame. In this game, I have added the following features: Welcome window, Pause game, Turn on/off sound, Save high score to a .txt file, Speed increment, Restart game window",
        tools: ['Python', 'PyGame', 'Sprites'],
        code: 'https://github.com/EolNuha/python-2d-games/tree/master/DinoGame',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },