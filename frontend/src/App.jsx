import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NihahNama from "./Pages/NikahNama";
import Birthday from "./Pages/Birthday";
import Other from "./Pages/Other";
import NotFound from "./Pages/404";
import Layout from "../Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Graphic-Gallery" element={<Home />} />
          <Route path="/NihahNama" element={<NihahNama />} />
          <Route path="/Birthday" element={<Birthday />} />
          <Route path="/Other" element={<Other />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
