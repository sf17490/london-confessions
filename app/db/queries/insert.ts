import { db } from "..";
import {
  confTimesAttempt1Table,
  InsertConfessionTime,
  InsertParish,
  parishesTable,
} from "../schema";

export async function createParish(data: InsertParish) {
  await db.insert(parishesTable).values(data);
}

export async function createConfessionTime(data: InsertConfessionTime) {
  await db.insert(confTimesAttempt1Table).values(data);
}
