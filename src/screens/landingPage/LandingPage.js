import React, {useEffect} from "react";
import "./LandingPage.css"

const LandingPage = (props) => {
	const showUserHandleClick = () =>{
		props.history.push("/users");
	}
	return (
		<div className="main-container">
			<button className="user-list-btn" onClick={showUserHandleClick}>Show Users</button>
		</div>
	);
};

export default LandingPage;
