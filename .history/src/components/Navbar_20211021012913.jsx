import React, { useState } from "react";
import "./NavBar.css";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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

	const [showLinks, setShowLinks] = useState(false);
	const [showSearchBar, setshowSearchBar] = useState(true);

	return (
		<div className="NavBar">
			{showSearchBar ? (
				<div className="SearchBar">
					<input type="text" placeholder="Search Notable" />
				</div>
			) : (
				<React.Fragment>
					<div className="Home">NOTABLE</div>
					<div className="Right">
						<button onClick={()=>setShowSearchBar}>
							<SearchIcon fontSize="large" />
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
								<HighlightOffIcon fontSize="large" />
							) : (
								<ReorderIcon fontSize="large" />
							)}
						</button>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default NavBar;
