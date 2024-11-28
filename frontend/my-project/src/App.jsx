import "./App.css";
import Animation from "./component/Animation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Animation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
