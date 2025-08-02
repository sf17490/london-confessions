import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const parishesTable = sqliteTable("parishes", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  website: text("website").unique().notNull(),
  confession_times: text("confession_times").notNull(),
});

export const confTimesAttempt1Table = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  time: text("time").notNull(),
  parishes: text("parishes").notNull(),
  createdAt: text("created_at")
    .default(sql`(CURRENT_TIMESTAMP)`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
});

export type InsertParish = typeof parishesTable.$inferInsert;
export type SelectParish = typeof parishesTable.$inferSelect;

export type InsertConfessionTime = typeof confTimesAttempt1Table.$inferInsert;
export type SelectConfessionTime = typeof confTimesAttempt1Table.$inferSelect;

export const churchTable = sqliteTable("Church", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  website: text("website").unique().notNull(),
});

export const confessionTimesTable = sqliteTable("ConfessionTime", {
  id: integer("id").primaryKey(),
  startTime: text("startTime").notNull(),
  endTime: text("endTime").notNull(),
  dayOfWeek: text("dayOfWeek").unique().notNull(),
});

export const churchConfessionJoinTable = sqliteTable("ChurchConfession", {
  churchId: integer("churchId"),
  confessionTimeId: integer("confessionTimeId"),
});
