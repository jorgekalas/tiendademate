import CustomNavbar from "./components/CustomNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Tutoriales from "./pages/Tutoriales";
import Menu from "./pages/Menu";
import Trabaja from "./pages/Trabaja";
import Franquicias from "./pages/Franquicias";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
	return (
		<div className="page-wrapper">
			<header>
				<CustomNavbar />
			</header>
			<main className="page-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tienda" element={<Tienda />} />
					<Route path="/tutoriales" element={<Tutoriales />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/trabaja" element={<Trabaja />} />
					<Route path="/franquicias" element={<Franquicias />} />
					<Route path="/contacto" element={<Contacto />} />
				</Routes>
			</main>
			<Footer />
			<ToastContainer />
		</div>
	);
}

export default App;
