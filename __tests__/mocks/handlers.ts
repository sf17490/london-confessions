import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/churchesByConfessionTime", () => {
    //DELETE me?
    return HttpResponse.json("stubbed churches yo yo yo");
  }),

  http.get("/api/confessionTimes", () => {
    return HttpResponse.json([
      { id: 1, startTime: "11:30", endTime: "12:30", dayOfWeek: "Monday" },
      { id: 2, startTime: "12:00", endTime: "12:30", dayOfWeek: "Monday" },
      { id: 3, startTime: "17:30", endTime: "18:00", dayOfWeek: "Monday" },
    ]);
  }),
];
