import Head from "next/head";

export default function Layout({ children, title = "Default Title" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <title>{title}</title>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        @Udemy 2021
      </footer>
    </div>
  );
}