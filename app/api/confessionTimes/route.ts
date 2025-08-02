import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { confessionTimesTable } from "@/app/db/schema";

export async function GET() {
  const res = await db.select().from(confessionTimesTable);

  return NextResponse.json(res);
}
