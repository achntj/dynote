import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
var config = require('../config.json');

const theme = config.theme;

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className={(theme == 'dark' ? 'bg-gray-900' : 'bg-slate-50')+" "+"prose"}>
    <div className="max-w-[750px] shadow-lg mx-auto flex flex-col min-h-screen bg-white">
    <Header />
    <div className="px-4 text-gray-700 flex-grow p-10">{props.children}</div>
    <Footer />
    </div>
  </div>
);

export default Layout;
