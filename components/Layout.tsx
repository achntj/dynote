import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="bg-slate-50 prose">
    <div className="max-w-[700px] shadow-lg mx-auto flex flex-col min-h-screen bg-white">
    <Header />
    <div className="px-4 text-gray-700 flex-grow p-10">{props.children}</div> 
    </div>
  </div>
);

export default Layout;
