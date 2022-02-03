import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="bg-slate-50 prose dark:bg-gray-900 dark:prose-a:text-cyan-400 dark:prose-headings:text-white dark:prose-strong:text-slate-50 dark:prose-blockquote:text-slate-400 dark:prose-pre:bg-gray-900 dark:prose-code:text-slate-300">
    <div className="max-w-[750px] shadow-lg mx-auto flex flex-col min-h-screen drop-shadow bg-white dark:bg-gray-800 dark:shadow-2xl">
    <Header />
    <div className="px-4 text-gray-700 flex-grow p-10 dark:text-slate-200">{props.children}</div>
    <Footer />
    </div>
  </div>
);

export default Layout;
