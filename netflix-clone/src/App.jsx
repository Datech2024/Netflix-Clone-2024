import "./App.css";
import Home from "./Pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<>
			<Home />
			<ToastContainer position="top-center" />
		</>
	);
}

export default App;
