import React, { useState, useEffect } from "react";
import Card from "../../component/card/Card";
import Header from "../../component/header/Header";
import "./Users.css";

const Users = () => {
	const [userList, setUserList] = useState([]);
	useEffect(() => {
		fetch("https://reqres.in/api/users?page=1")
			.then((result) => result.json())
			.then((data) => {
				let users = data.data;
				setUserList(
					users.map((user) => {
						let newUser = {
							firstName: user.first_name,
							lastName: user.last_name,
							email: user.email,
							avatar: user.avatar,
							id: user.id,
						};
						return newUser;
					})
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log(userList);
	return (
		<div id="users" className="main-container">
			<Header />
			<div className="card-container">
				{userList.map((user) => (
					<Card
						key={user.id}
						firstName={user.firstName}
						lastName={user.lastName}
						email={user.email}
						avatar={user.avatar}
					/>
				))}
			</div>
		</div>
	);
};

export default Users;
