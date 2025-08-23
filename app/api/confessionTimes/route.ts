import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { confessionTimesTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedDayOfWeek = searchParams.get("dayOfWeek");

  const res1 = await db.select().from(confessionTimesTable);

  let res2;
  if (requestedDayOfWeek) {
    res2 = await db
      .select()
      .from(confessionTimesTable)
      .where(eq(confessionTimesTable.dayOfWeek, requestedDayOfWeek));
  } else {
    res2 = await db.select().from(confessionTimesTable);
  }

  return NextResponse.json(res2);
}
