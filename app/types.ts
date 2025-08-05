export type ChurchData = {
  address: string;
  id: number;
  name: string;
  website: string;
};

export type ChurchByConfessionTimeId = {
  Church: ChurchData;
  ChurchConfession: {
    churchId: number;
    confessionTimeId: number;
  };
};

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type ConfessionTimeEntry = {
  id: number;
  startTime: string;
  endTime: string;
  dayOfWeek: DayOfWeek;
};

export type ConfessionTimeWithChurches = {
  confessionTime: string;
  churches: ChurchByConfessionTimeId[];
};
