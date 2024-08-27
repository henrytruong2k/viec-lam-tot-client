import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
