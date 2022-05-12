import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import VirtualReality from "./routes/VirtualReality";
import Contact from "./routes/Contact";
import VfxPage from "./routes/VfxPage";
import MetaversePage from "./routes/MetaversePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vr" element={<VirtualReality />} />
        <Route path="/vfx" element={<VfxPage />} />
        <Route path="/metaverse" element={<MetaversePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
