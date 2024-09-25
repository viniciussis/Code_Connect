import { Aside } from "@/components/Aside";
import "./globals.scss";

export const metadata = {
  title: "Code Connect",
  description: "A Social Media Network for DEVs!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
