import { http, HttpResponse } from "msw";
import {
  elevenThirtyChurches,
  fiveThirtyChurches,
  sixFortyFiveChurches,
  twelveOclockChurches,
} from "../dummyData/dummyData";

export const handlers = [
  http.get("/api/churchesByConfessionTime", ({ request }) => {
    const url = new URL(request.url);
    const confessionTimeId = url.searchParams.get("confessionTimeId");
    if (confessionTimeId === "1") {
      return HttpResponse.json(elevenThirtyChurches);
    }
    if (confessionTimeId === "2") {
      return HttpResponse.json(twelveOclockChurches);
    }
    if (confessionTimeId === "3") return HttpResponse.json(fiveThirtyChurches);
    if (confessionTimeId === "4")
      return HttpResponse.json(sixFortyFiveChurches);
  }),

  http.get("/api/confessionTimes", ({ request }) => {
    const url = new URL(request.url);
    const dayOfWeek = url.searchParams.get("dayOfWeek");
    ("http:localhost:3000/api/confessionTimes?dayOfWeek=Monday");

    if (dayOfWeek === "Monday")
      return HttpResponse.json([
        { id: 1, startTime: "11:30", dayOfWeek: "Monday" },
        { id: 2, startTime: "12:00", dayOfWeek: "Monday" },
        { id: 3, startTime: "17:30", dayOfWeek: "Monday" },
      ]);

    if (dayOfWeek === "Tuesday")
      return HttpResponse.json([
        { id: 4, startTime: "06:45", dayOfWeek: "Tuesday" },
      ]);

    return HttpResponse.json([
      { id: 1, startTime: "11:30", dayOfWeek: "Monday" },
      { id: 2, startTime: "12:00", dayOfWeek: "Monday" },
      { id: 3, startTime: "17:30", dayOfWeek: "Monday" },
      {
        dayOfWeek: "Tuesday",
        id: 4,
        startTime: "06:45",
      },
    ]);
  }),
];
