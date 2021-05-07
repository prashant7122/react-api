import React from "react";
import Avatar from "../avatar/Avatar";
import "./Card.css";

const Card = ({ firstName, lastName, avatar, email}) => {
	return (
		<div className="card">
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div className="top-container">
					<Avatar srcUrl={avatar}/>
					<div>
						<h5 className="name">{`${firstName} ${lastName}`}</h5>
					</div>
				</div>
				<label className="email">{email}</label>
			</div>
		</div>
	);
};

export default Card;
