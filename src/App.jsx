import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import "./app.css";
import Protected from "./pages/Protected/Protected";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className="page-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
