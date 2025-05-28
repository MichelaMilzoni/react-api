//# COMPONENTE PRINCIPALE DELL'APP

import "bootstrap/dist/css/bootstrap.min.css"; // Importiamo lo stile di Bootstrap
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import ActorsPage from "./pages/ActorsPage";
import ActressesPage from "./pages/ActressesPage";

const App = () => {
  return (
    <Router>
      <Container className="mt-4">
        <h1 className="text-center">🎭 Cast Fetching 🎭</h1>
        {/* Navbar per la navigazione */}
        <Nav className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link as={Link} to="/actors">Attori</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/actresses">Attrici</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Gestione delle rotte */}
        <Routes>
          <Route path="/" element={<ActorsPage />} /> {/* Homepage con attori */}
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/actresses" element={<ActressesPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

