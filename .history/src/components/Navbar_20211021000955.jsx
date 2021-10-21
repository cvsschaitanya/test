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
		"Profile",
		"Community",
		"Tokenomics",
		"About",
	];

	const [showLinks, setShowLinks] = useState(true);

	return (
		<div className="NavBar">
			<div className="Home">NOTABLE</div>

			<div className="Right">
				<button>
					<SearchIcon />
				</button>
				{
                showLinks ? (
					<div className="linksVisible">
						{menuItems.map((item) => (
							<a href={link[item] || "/"}>{item}</a>
						))}
					</div>
				) : null}
				<button onClick={() => setShowLinks(!showLinks)}>
					<ReorderIcon />
				</button>
			</div>
		</div>
	);
}

export default NavBar;
