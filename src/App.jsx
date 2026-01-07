import Home from "./components/Home";

import Api from "./components/Api.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  

  return (
    <div>
<Routes>
  <Route path="/" element={<Home  />} />
  <Route path="/home" element={<Home />} />
  <Route path="/card" element={<Api />} />
</Routes>

    </div>
  );
};

export default App;
