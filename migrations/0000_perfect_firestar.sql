CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`time` text NOT NULL,
	`parishes` text NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `parishes` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`address` integer NOT NULL,
	`website` text NOT NULL,
	`confession_times` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `parishes_website_unique` ON `parishes` (`website`);