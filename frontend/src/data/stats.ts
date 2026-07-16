export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export const statsData: StatItem[] = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Technologies Used", value: 12, suffix: "+" },
  { label: "Months of Internship", value: 3 },
  { label: "Lines of Code", value: 10000, suffix: "+" },
];
