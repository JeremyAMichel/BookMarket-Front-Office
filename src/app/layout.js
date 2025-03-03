import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "../styles/globals.css";
import Navbar from "@/components/nav/Navbar";
import { AuthProvider } from "@/contexts/auth/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookMarket",
  description: "BookMarket Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <AuthProvider>
          <Theme
            appearance="dark"
            accentColor="gray"
            grayColor="gray"
            radius="large"
            scaling="95%"
          >
            <Navbar />
            <main className="flex min-h-screen flex-col">{children}</main>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
