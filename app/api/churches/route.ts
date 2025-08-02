import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { churchTable, churchConfessionJoinTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const res = await db
    .select()
    .from(churchTable)
    .leftJoin(
      churchConfessionJoinTable,
      eq(churchTable.id, churchConfessionJoinTable.churchId)
    );

  return NextResponse.json(res);
}
