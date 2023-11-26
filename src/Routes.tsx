import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const Landing = React.lazy(() => import("../src/pages/landing/index"));
const Website = React.lazy(() => import("pages/about"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutUs" element={<Website />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
