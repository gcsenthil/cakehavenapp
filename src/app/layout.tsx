import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/globals/navigationBar";
import Footer from "@/globals/footer";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cake Havens",
  description:
    "Cake Havens offers a variety of delicious, freshly baked cakes and desserts perfect for any occasion.",
  keywords:
    "cakes, desserts, fresh cakes, cake delivery, birthday cakes, cake shop, delicious cakes",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title */}
        <title>{metadata.title}</title>

        {/* Favicon */}
        <link
          rel="icon"
          href="/img/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        />

        {/* External JavaScript (Ensure it's in the correct path) */}
        <script src="/js/main.js" defer></script>

        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
      </Head>
      <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <NavigationBar />
        <main className="mx-auto max-w-6xl">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
