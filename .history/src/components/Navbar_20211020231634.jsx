import { useState } from "react";
import "./NavBar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

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
