import Link from "next/link";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Jesper M. Førisdahl",
  description: "Personal homepage and blog (maybe)",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <nav className="flex flex-row py-4 max-w-[900px] mx-auto py-4 px-8 lg:px-0">
          <ul className="flex flew-row gap-2 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <main className="flex min-h-screen flex-col gap-2 p-8 lg:p-0">
          {children}
        </main>
      </body>
    </html>
  );
}
