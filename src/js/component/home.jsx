import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";

componentDidMount() {
	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({title: 'React Post Request Example'})
	};
	fetch('https://reqres.in/api/posts', requestOptions)
	.then(response => response.json())
	.then(data => console.log(data))
}
// const Home = (props) => {
// 	const [data, setData] = useState("");
// 	useEffect(() => {
// 		fetch("https://jsonplaceholder.typicode.com/posts")
// 			.then(response => response.json())
// 			.then(data => this.setState({postId: data.title}),
// 				(setData = data)
// 			)
// 	});
// 	return (
// 		<div>
// 			{data &&
// 				data.map((post) => {
// 					return <p>{post.title}</p>;
// 				})}
// 		</div>
// 	);
// };
//export default Home;
