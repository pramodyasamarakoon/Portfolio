export interface Project {
    title: string;
    mainImg?: [string, string];
    year: string;
    descriptionShort: string;
    descriptionLong?: string[];
    techStack: string[];
    githubLinkFrontend?: string;
    githubLinkBackend?: string;
    images?: string[];
}

export const projectsData: Project[] = [
    {
        title: "Boarding Expenses Tracking App",
        mainImg: [
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/1.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/2.jpg`
        ],
        year: "2025",
        descriptionShort: `A mobile app capable of tracking and calculating all expenses and incomes for boarding places...`,
        descriptionLong: ["Managing expenses in a shared boarding environment can be challenging...", /* Other description here */],
        techStack: ["Flutter", "Express", "MongoDB"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/BoardingExpensesApp_Frontend.git",
        githubLinkBackend:"https://github.com/pramodyasamarakoon/BoardingExpensesApp_Backend.git",
        images: [
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/3.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/4.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/5.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/6.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/7.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/8.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Boarding_Expenses_Tracking_App/9.jpg`,
        ]
    },
    {
        title: "Web-based System for Kelani STEAM",
        mainImg: [
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/1.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/2.png`
        ],
        year: "2024",
        descriptionShort: `A web-based system which is capable of managing the entire process of the Media Unit...`,
        descriptionLong: ["The Web-based System for Kelani STEAM is a comprehensive platform designed to streamline...", /* Other description here */],
        techStack: ["React JS", ".Net Core", "Spring boot", "MongoDB", "Material UI", "Tailwind CSS"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Kelani-STEAM-Frontend.git",
        githubLinkBackend:"https://github.com/pramodyasamarakoon/KelaniSTEAM_Backend.net.git",
        images: [
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/1.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/2.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/3.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/4.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/5.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/6.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/7.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Kelani_Steam/8.png`
        ]
    },
    {
        title: "Lab Solution App",
        year: "2024",
        descriptionShort: `A mobile app designed for small laboratories to patient registration, booking tests, report entering and notifying patients.`,
        descriptionLong: ["The Lab Solution App is a mobile application designed to streamline the operations of small-scale laboratories...", /* Other description here */],
        techStack: ["Flutter"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Lab-Solution-App.git",
        images: [
            `${process.env.PUBLIC_URL}/assets/projects/Lab_Solution/1.jpg`,
            `${process.env.PUBLIC_URL}/assets/projects/Lab_Solution/2.jpg`
        ]
    },
    {
        title: "Frontend for a Distributed System",
        year: "2024",
        descriptionShort: `A React JS frontend for a distributed system.`,
        descriptionLong: ["The Frontend for a Distributed System is a React JS-based user interface designed for a cloud-based file management system...", /* Other description here */],
        techStack: ["React JS", "Material UI", "Tailwind CSS"],
        images: [
            `${process.env.PUBLIC_URL}/assets/projects/Distributed_System/1.jpg`
        ]
    },
    {
        title: "e-channelling and order medicine System",
        mainImg: [
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/01.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/02.png`
        ],
        year: "2023",
        descriptionShort: `Final Individual Project. Developed a web-based system for a medical center that included e channeling...`,
        descriptionLong: ["The E-Channelling and Order Medicine System was developed as my final individual project at university...", /* Other description here */],
        techStack: ["React JS", "Spring boot", "MongoDB", "Material UI", "Tailwind CSS"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Aromed_Frontend.git",
        githubLinkBackend:"https://github.com/pramodyasamarakoon/Aromed-Backend.git",
        images: [
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/01.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/02.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/03.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/04.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/05.png`
        ]
    },
    {
        title: "Hospital Management System",
        year: "2020",
        descriptionShort: `Group Project. A desktop application capable of managing a typical Hospital's entire process.`,
        descriptionLong: ["The Hospital Management System was developed as a mock group project to simulate the operations of a small-scale hospital...", /* Other description here */],
        techStack: ["React JS", "Spring boot", "MongoDB", "Material UI", "Tailwind CSS"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Aromed_Frontend.git",
        githubLinkBackend:"https://github.com/pramodyasamarakoon/Aromed-Backend.git",
    },
]
