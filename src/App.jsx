import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";

const App = () => {
  return (
    <>
      <Navbar />

      {/* 
        <h1>App Encab</h1> 
      */}

      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
