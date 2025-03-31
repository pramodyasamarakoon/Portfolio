export interface About {
  title: string;
  inDate: string;
  outDate?: string;
  institute: string;
  description?: string;
}

export const academicData: About[] = [
  {
    title: "B.Sc (Hons) in Management and Information Technology",
    inDate: "Mar 2020",
    outDate: "Jan 2024",
    institute: "Department of Industrial Management, University of Kelaniya",
    description: " GPA : 3.1 out of 4.0 with a Second Lower Class",
  },
  {
    title: "G.C.E. A/L Examination",
    inDate: "2018",
    institute: "Rananbima Royal Collage, Peradeniya",
    description: "Passed with 3'B' passes",
  },
];
export const researchData: About[] = [
  {
    title: `Analyzing the Learning Effectiveness of Generative AI for Software Development for Undergraduates in Sri Lanka`,
    inDate: "2024",
    institute: "Conference Paper",
    description:
      "International Research Conference on Smart Computing and Systems Engineering (SCSE)",
  },
];
export const extraCData: About[] = [
  {
    title: "Committee Member",
    inDate: "2023",
    outDate: "2024",
    institute:
      "Industrial Management Science Students' Association, Faculty of Science, University of Kelaniya",
  },
  {
    title: "Director",
    inDate: "2022",
    outDate: "2023",
    institute:
      " Kelani-STEAM, Media Unit, Faculty of Science, University of Kelaniya",
  },
  {
    title: "Main Coordinator",
    inDate: "2021",
    outDate: "2022",
    institute:
      "Kelani-STEAM, Media Unit, Faculty of Science, University of Kelaniya",
  },
  {
    title: "Co-editor",
    inDate: "2021",
    outDate: "2022",
    institute: "Buddhist Students Association, University of Kelaniya",
  },
];
