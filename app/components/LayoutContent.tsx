import { ThemeProvider } from "next-themes";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system">
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <main className="mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }