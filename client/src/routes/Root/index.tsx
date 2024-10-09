import { Outlet } from "react-router-dom";

import Footer from "./Footer";

export default function Root() {
  return (
    <div className="root">
      <Outlet />
      <Footer />
    </div>
  );
}