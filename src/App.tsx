import { Outlet } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import Navbar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";

export const serverUrl = "https://mecha-freak-server.vercel.app";

function App() {
  return (
    <>
      <Helmet>
        <title>Mecha Freak</title>
      </Helmet>
      <div>
        <Navbar />
        <div className="mt-16">
          {/* <div className="min-h-[calc(100vh-68px)]"> */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
