import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return(
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 flex justify-between">
          <h1 className="text-xl font-bold">Golang Dev</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">About</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}