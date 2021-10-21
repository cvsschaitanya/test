import React, { useState } from "react";
import "./NavBar.css";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";
import {
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineFacebook,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

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
	const [showSearchBar, setShowSearchBar] = useState(false);

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
								<div className="social">
									<button>
										<AiOutlineInstagram size={28} />
									</button>
									<button>
										<AiOutlineTwitter size={28} />
									</button>
									<button>
										<BsDiscord />
									</button>
									<button>
										<AiOutlineFacebook />
									</button>
								</div>
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
