import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { confessionTimesTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedDayOfWeek = searchParams.get("dayOfWeek");

  let response;
  if (requestedDayOfWeek) {
    response = await db
      .select()
      .from(confessionTimesTable)
      .where(eq(confessionTimesTable.dayOfWeek, requestedDayOfWeek));
  } else {
    response = await db.select().from(confessionTimesTable);
  }

  return NextResponse.json(response);
}
