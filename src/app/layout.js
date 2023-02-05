import { NavBar } from "@/components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-auto container bg-slate-200 ">
        <NavBar />
        <div className="max-w-lg mx-auto min-h-screen">{children}</div>

        <footer className="absolute p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://pedro.com.br/" className="hover:underline">
              Developed and designed by Pedro J Gomez
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </body>
    </html>
  );
}
