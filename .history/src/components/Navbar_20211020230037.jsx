import { useState } from "react";
import "./NavBar.css";
import ReorderIcon from "@material-ui/icons";

function NavBar({ link }) {
	const menuItems = [
		"Marketplace",
		"Stats",
		"Guid",
		"Blog",
		// "Profile",
		// "Community",
		// "Tokenomics",
		// "About",
	];

	const [showLinks, setShowLinks] = useState(true);

	return (
		<div className="NavBar">
			<div className="Left">
				<div className="links" id={showLinks ? "hidden" : ""}>
					{menuItems.map((item) => (
						<a href={link[item] || "/"}>{item}</a>
					))}
				</div>
				<button onClick={() => setShowLinks(!showLinks)}>
					<ReorderIcon />
				</button>
			</div>
			<div className="Right">
				<input type="text" placeholder="Search" />
				<button>
					<SearchIcon />
				</button>
			</div>
		</div>
	);
}

export default NavBar;
