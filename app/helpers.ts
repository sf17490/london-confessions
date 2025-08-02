import { ChurchByConfessionTimeId } from "./api/churchesByConfessionTime/route";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type ConfessionTimeEntry = {
  id: number;
  startTime: string;
  endTime: string;
  dayOfWeek: DayOfWeek;
};

export type ConfessionTimeWithChurches = {
  confessionTime: string;
  churches: ChurchByConfessionTimeId[];
};

//This function must be bad practice...
function getApiUrl(path: string) {
  if (process.env.NODE_ENV === "test") {
    // Node.js (test or SSR)
    return `http://localhost:3000${path}`;
  } else {
    // Browser
    return path;
  }
}

export async function matchChurchesToConfessionTimes() {
  const confessionTimes = await fetch(getApiUrl("/api/confessionTimes"));
  const confessionTimesJson: ConfessionTimeEntry[] =
    await confessionTimes.json();
  const matched = await Promise.all(
    confessionTimesJson.map(async (confessionTimeJson) => {
      const url = `/api/churchesByConfessionTime?confessionTimeId=${confessionTimeJson.id.toString()}`;
      const churches = await fetch(getApiUrl(url));
      const churchesData: ChurchByConfessionTimeId[] = await churches.json();
      const result = {
        confessionTime: confessionTimeJson.startTime,
        churches: churchesData,
      };
      return result;
    })
  );
  return matched;
}
