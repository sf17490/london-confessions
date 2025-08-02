import { NextResponse } from "next/server";
import { db } from "@/app/db";
import { churchTable, churchConfessionJoinTable } from "@/app/db/schema";
import { eq } from "drizzle-orm";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedConfessionTimeId = Number(
    searchParams.get("confessionTimeId")
  );
  const res = await db
    .select()
    .from(churchTable)
    .innerJoin(
      churchConfessionJoinTable,
      eq(churchTable.id, churchConfessionJoinTable.churchId)
    )
    .where(
      eq(churchConfessionJoinTable.confessionTimeId, requestedConfessionTimeId)
    );

  return NextResponse.json(res);
}

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
