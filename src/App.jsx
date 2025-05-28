//# COMPONENTE PRINCIPALE DELL'APP

import "bootstrap/dist/css/bootstrap.min.css"; // Importiamo lo stile di Bootstrap
import { Container } from "react-bootstrap"; // Componenti di layout di Bootstrap
import Home from "./pages/Home";

const App = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">🎭 Cast Fetching 🎭</h1>
      <Home />
    </Container>
  );
};

export default App;