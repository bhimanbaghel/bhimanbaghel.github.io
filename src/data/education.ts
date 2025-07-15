export interface EducationItem {
  id: number;
  university: string;
  degree: string;
  year: string;
  gpa?: string;
  logo: string;
  advisor?: string;
  thesis?: string;
}

// Education data
export const educationData: EducationItem[] = [
  {
    id: 1,
    university: "University Of Pittsburgh, PA, USA",
    degree: "PhD in Computer Science",
    year: "August 2023 - April 2027",
    gpa: "3.5/5",
    advisor: "Dr. Xiang (Lorraine) Li",
    logo: "/pitt.png" // Replace with University of Pittsburgh logo
  },
  {
    id: 2,
    university: "Indian Institute of Technology (IIT), Kharagpur, India",
    degree: "M.Tech in Computer Science",
    year: "July 2017 - May 2019",
    gpa: "8.82/10",
    thesis: "DCLL - A Deep Learning Model for Travel Time and Traffic Congestion Prediction",
    logo: "/iit-kgp.png" // Replace with IIT Kharagpur logo
  },
  {
    id: 3,
    university: "National Institute Of Technology (NIT), Jalandhar, India",
    degree: "B.Tech in Computer Science",
    year: "June 2013 - June 2017",
    gpa: "6.82/10",
    logo: "/nitj.png" // Replace with NIT Jalandhar logo
  }
]; 