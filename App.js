import "./App.css";
import TodoList from "./components/toDoList";
import RegistarPage from "./components/RegistarPage";
import { Route, Link, Routes } from "react-router-dom";
import LogInScreen from "./components/LogInScreen";

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<Link to="/">Sign Up An Account</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/LogInScreen">Log In Credentials</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/TodoList">Use To Do List</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<RegistarPage />} />
				<Route path="/LogInScreen" element={<LogInScreen />} />
				<Route path="/TodoList" element={<TodoList />} />
			</Routes>
		</div>
	);
}

export default App;
