import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buku from "./Pages/Buku";
import PageBaru from "./Pages/PageBaru";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buku />} />
        <Route path="/halaman-baru" element={<PageBaru />} />
      </Routes>
    </Router>
  );
}

export default App;
