export interface Experience {
    title: string;
    company: string;
    startDate: string;
  endDate: string;
  description: string;
  techStack: string[];
  dotColor?: "primary" | "secondary" | "error";
}

export const experienceData: Experience[] = [
    {
        title: "Associate Software Engineer",
        company: "FourthSyte International",
        startDate: "April 2024",
        endDate: "Present",
        description: "Working as a Full-Stack Developer, responsibilities include team handling, project coordination, basic architectural designing, web and mobile app development, main component creation, bug fixing, requirement gathering, wireframe creation, and UI/UX designing.",
        techStack: ["React.js", "React Native", "Flutter", ".NET Core", "Node.js"],
        dotColor: "primary",
    },
    {
        title: "Software Engineer Intern",
        company: "Loons Lab",
        startDate: "Sep 2022",
        endDate: "Mar 2023",
        description: "Worked as a React Front-end Developer, with responsibilities including feature implementations, component development, bug fixing, requirement gathering, manual testing, and UI designing.",
        techStack: ["React.js", "Material UI", "JSReport"],
        dotColor: "secondary",
    },
]