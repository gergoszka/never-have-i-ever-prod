import { Link } from "react-router-dom";

function MainHeader() {
	return (
		<header className="header">
			<div id="logo">
				<Link to="/">DrinkScript</Link>
			</div>
			<nav className="nav">
				<ul>
					<li>
						<Link to="/randomizer">Randomizer</Link>
					</li>
					<li>
						<Link to="/markov">Markov AI</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;
