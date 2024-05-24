import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import './App.css';
import { DB } from './firebase-config';

function App() {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [users, setUsers] = useState([]);

	async function handleSubmit(e) {
		e.preventDefault();
		console.log('submitting');
		try {
			const docRef = await addDoc(collection(DB, 'users'), {
				first: firstname,
				last: lastname,
				born: 1815,
			});

			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}

	async function getData() {
		const querySnapshot = await getDocs(collection(DB, 'users'));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
			setUsers((prev) => [...prev, doc.data()]);
		});
	}

	return (
		<div>
			<h1>Firebase database tutorial</h1>
			<form onSubmit={handleSubmit}>
				<h2>Send Data</h2>
				<input
					type="text"
					name="firstname"
					value={firstname}
					onChange={(e) => setFirstname(e.target.value)}
				/>
				<input
					type="text"
					name="lastname"
					value={lastname}
					onChange={(e) => setLastname(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>

			<h2>Get data</h2>
			<button onClick={getData}>Get Data</button>
			<ul>
				{users.map((user, index) => (
					<li key={index}>
						{user.first} {user.last}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
