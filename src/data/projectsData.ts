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
        descriptionShort: `A mobile app capable of tracking and calculating all expenses and incomes for boarding places, 
        providing separate tracking for each individual in the boarding.`,
        descriptionLong: ["Managing expenses in a shared boarding environment can be challenging, often leading to confusion and miscalculations. To solve this real-world issue, the Boarding Expenses Tracking App was developed to efficiently track and manage incomes and expenses for a boarding house. This app provides a transparent and structured approach to financial tracking, ensuring that all transactions are recorded, balances are updated automatically, and users can easily monitor their financial contributions.", "The app enables tracking of incomes received from boarding residents and expenses incurred either for the boarding house as a whole or for personal use. Each user has an individual account, and their balance is updated dynamically based on their recorded transactions. This ensures that everyone involved has clear visibility into their financial standing without the need for manual calculations or complex spreadsheets.", "There are two types of users in the system: Admins and Users. Admins have full control over financial management, including adding and managing users, recording expenses for individuals or groups, adding income for specific users, viewing complete transaction histories, editing or deleting transactions, and accessing detailed financial dashboards of all users. Regular users, on the other hand, can view their account balance and access their last ten transactions, allowing them to stay informed about their financial activities within the boarding.", "Currently, the app's backend is hosted on an on-premise server, providing reliable performance and secure data management. Based on user feedback, further improvements and updates will be made to enhance functionality and usability. Looking ahead, there are plans to release the app on both the Play Store and App Store after additional features are integrated, making expense tracking even more accessible and efficient for a wider audience.", "By offering a simple yet powerful solution for financial tracking in shared living spaces, the Boarding Expenses Tracking App eliminates the hassle of manual calculations and promotes transparency among residents. This ensures fair expense management, allowing users to focus on their daily lives without worrying about financial disputes or mismanaged funds.",],
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
        descriptionShort: `A web-based system which is capable of managing the entire process of the Media Unit, Faculty of Science.`,
        descriptionLong: ["The Web-based System for Kelani STEAM is a comprehensive platform designed to streamline and manage the operations of the Media Unit, Faculty of Science. This system enhances efficiency by providing a centralized solution for handling various aspects of the media unit, ensuring seamless management of events, projects, and digital content.", "One of the key features of this system is its ability to present interactive dashboards that provide an overview of the media unit’s activities. Users can explore recent albums and projects, gain insights into the history of the media unit, and view the details of the current committee members. Additionally, the system allows users to seamlessly book photography events, making it easier for students and faculty to access media unit services.", "The system includes two types of user roles: Admins and Users. Admins have full control over content management, allowing them to add, edit, and delete projects and albums. They can also manage event bookings by viewing and updating event appointments, ensuring smooth coordination of photography services. Furthermore, admins can update general information across the system, keeping the platform current and relevant.", "By integrating all these functionalities, the Web-based System for Kelani STEAM serves as an essential tool for the Media Unit, enhancing communication, organization, and accessibility. With its user-friendly interface and efficient management capabilities, the system ensures that all media-related activities are well-documented, easily accessible, and efficiently coordinated.",],
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
        descriptionShort: `A mobile app designed for small laboratories to patient registration, booking tests, report 
entering and notifying patients.`,
        descriptionLong: ["The Lab Solution App is a mobile application designed to streamline the operations of small-scale laboratories, enabling efficient patient registration, test booking, and report management. This system enhances workflow automation by providing a simple yet effective platform for managing laboratory tasks while ensuring seamless communication between medical laboratory technologists (MLTs) and patients.", "With this app, MLTs can register patients, book tests, enter reports, and send them directly to patients. The system ensures that laboratory staff can efficiently handle patient data and manage test results with minimal effort. On the other hand, patients have restricted access, allowing them only to view their reports, ensuring data security and privacy.","The app provides an intuitive and user-friendly interface, making it easy for laboratory staff to input test results, track patient records, and manage report distribution. This improves operational efficiency by reducing paperwork and manual record-keeping, enabling laboratories to focus on providing quality healthcare services.", "While this project is currently focused on frontend development, the UI has been crafted to ensure a smooth user experience and seamless interaction with the backend services. The app is designed with scalability in mind, allowing for future enhancements such as integrations with lab equipment, automated notifications, and report analytics.", "By digitizing lab operations, the Lab Solution App provides small laboratories with an efficient, paperless, and organized approach to patient and test management, ultimately improving service delivery and patient satisfaction.", ],
        techStack: ["Flutter"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Lab-Solution-App.git",
    },
    {
        title: "Frontend for a Distributed System",
        year: "2024",
        descriptionShort: `A React JS frontend for a distributed system.`,
        descriptionLong: ["The Frontend for a Distributed System is a React JS-based user interface designed for a cloud-based file management system similar to OneDrive. This frontend provides an intuitive and responsive user experience, enabling seamless interaction with distributed storage and file-sharing functionalities. Users can upload, manage, and access files efficiently through a well-structured UI, ensuring smooth navigation and accessibility.", ],
        techStack: ["React JS", "Material UI", "Tailwind CSS"],
    },
    {
        title: "e-channelling and order medicine System",
        mainImg: [
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/01.png`,
            `${process.env.PUBLIC_URL}/assets/projects/Aromed/02.png`
        ],
        year: "2023",
        descriptionShort: `Final Individual Project.
 Developed a web-based system for a medical center that included e channeling, online 
medical appointments, laboratory report management and a medical ordering system`,
        descriptionLong: ["The E-Channelling and Order Medicine System was developed as my final individual project at university, designed to streamline the appointment scheduling and medical ordering processes for a medical center. This web-based system enhances efficiency by allowing users to schedule doctor consultations, book lab tests, and order medicines online, eliminating the need for manual record-keeping and reducing waiting times.", "Patients using the system can browse available doctors, check time slots, view consultation fees, and book appointments for both medical consultations and laboratory tests. The system ensures a smooth and transparent booking process, allowing users to manage their healthcare needs conveniently. Doctors, on the other hand, can add and manage their available time slots while also viewing their scheduled appointments, helping them organize their daily workflow efficiently.", "The system also provides management-level access, where administrators can monitor all appointments, track income, and oversee overall system operations. With its structured interface and role-based access control, the E-Channelling and Order Medicine System improves the medical center's operational efficiency by offering a fully digital solution for managing appointments, lab tests, and medicine orders."],
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
        descriptionLong: ["The Hospital Management System was developed as a mock group project to simulate the operations of a small-scale hospital. This desktop application includes basic functionalities such as patient registration, doctor appointments, billing, and medical record management, providing a structured approach to hospital administration. While not deployed in a real-world setting, the project served as a valuable learning experience in software development, teamwork, and system design."],
        techStack: ["React JS", "Spring boot", "MongoDB", "Material UI", "Tailwind CSS"],
        githubLinkFrontend: "https://github.com/pramodyasamarakoon/Aromed_Frontend.git",
        githubLinkBackend:"https://github.com/pramodyasamarakoon/Aromed-Backend.git",
    },
]
