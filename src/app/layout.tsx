import { SearchForm } from "@/components/SearchForm";
import { Aside } from "@/components/Aside";
import { Prompt } from "next/font/google";
import "./globals.scss";

export const metadata = {
  title: "Code Connect",
  description: "A Social Media Network for DEVs!",
};

const prompt = Prompt({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>
          <div className="main-content">
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
