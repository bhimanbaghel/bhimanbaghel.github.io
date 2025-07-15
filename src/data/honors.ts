export interface HonorItem {
  date: string;
  title: string;
  organization: string;
  description?: string;
}

export const HONORS: HonorItem[] = [
  {
    date: "2023",
    title: "Samsung High Performance Bonus (3×)",
    organization: "Samsung Research -- Bangalore, India",
  },
  {
    date: "2023", 
    title: "Samsung Excellence Award (5×)",
    organization: "Samsung Research -- Bangalore, India",
    description: "Recognized for SmartThings CLab innovation finalist and 4 US A1 patent filings.",
  },
  {
    date: "2018",
    title: "2nd Runner-Up, Audience Poll",
    organization: "IBM Extreme Blue Expo -- Bangalore, India", 
    description: "Voted top-3 of 24 projects by 100+ expo attendees.",
  },
]; 