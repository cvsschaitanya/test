import React, { useState } from "react";
import "./NavBar.css";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

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
	const [showSearchBar, setShowSearchBar] = useState(true);
    const socialMediaIcons = [AiOutlineInstagram,AiOutlineTwitter,]

	return (
		<div className="NavBar">
			{showSearchBar ? (
				<div className="SearchBar">
					<input type="text" placeholder="Search Notable" />
					<button onClick={() => setShowSearchBar(false)}>
						<HighlightOffIcon fontSize="large" />
					</button>
				</div>
			) : (
				<React.Fragment>
					<div className="Home">NOTABLE</div>
					<div className="Right">
						<button onClick={() => setShowSearchBar(true)}>
							<SearchIcon fontSize="large" />
						</button>
						{showLinks ? (
							<div className="links">
								{menuItems.map((item) => (
									<a href={link[item] || "/"}>{item}</a>
								))}
								<button onClick={() => setShowSearchBar(false)}>
									<AiOutlineInstagram fontSize="large" />
								</button>
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
