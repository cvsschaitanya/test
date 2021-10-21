import { useState } from "react";
import "./NavBar.css";

import { styled } from "@material-ui/styles";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ReorderIcon from "@material-ui/icons/ReorderOutlined";
import SearchIconOutlined from "@material-ui/icons/SearchOutlined";

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
					<SearchIconOutlined />
				</button>
				{showLinks ? (
					<div className="links">
						{menuItems.map((item) => (
							<a href={link[item] || "/"}>{item}</a>
						))}
					</div>
				) : null}
				<button onClick={() => setShowLinks(!showLinks)}>
					{showLinks ? (
						<HighlightOffIcon styles={{ color: "green" }} />
					) : (
						<ReorderIcon />
					)}
				</button>
			</div>
		</div>
	);
}

export default NavBar;
