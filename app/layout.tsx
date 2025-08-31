import React from "react";
export const metadata = {
  title: "London Catholic Confession Times",
  description: "Find Catholic confession times in Central London (Zone 1).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
