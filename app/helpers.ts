import { ChurchByConfessionTimeId, ConfessionTimeEntry } from "./types";

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

export async function matchChurchesToConfessionTimes(dayOfWeek: String) {
  const confessionTimes = await fetch(
    getApiUrl(`/api/confessionTimes?dayOfWeek=${dayOfWeek}`)
  );
  const confessionTimesJson: ConfessionTimeEntry[] =
    await confessionTimes.json();
  //sort by time
  confessionTimesJson.sort((a, b) => a.startTime.localeCompare(b.startTime)); //Ensure the fetches are mocked so that we can test this.
  //The above line ensures that confession times are returned from earliest to latest.
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
