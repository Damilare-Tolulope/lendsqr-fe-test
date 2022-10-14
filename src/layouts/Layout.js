import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './layout.scss'


const Layout = ({ children, title }) => {
  
  return (
    <div className="layout">
        <Header title={title} />

      <div className="layout_body">
        <Sidebar />
        <div className="layout_content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
