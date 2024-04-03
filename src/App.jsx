import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Home from '../src/views/Home';
import Pizzas from './views/Pizzas';
import NotFound from '../src/views/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route 
        path="/"
        element={<Home />}
        />
        <Route 
        path="/pizzas"
        element={<Pizzas />}
        />
        <Route 
        path="/*"
        element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
