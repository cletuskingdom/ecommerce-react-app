import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";

const Shop = () => {
	return <h1>I am thhe shop page.</h1>;
};
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path="/shop" element={<Shop />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
