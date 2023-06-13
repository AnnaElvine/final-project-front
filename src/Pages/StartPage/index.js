/*import React from 'react'; */
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react'; 
import styled from 'styled-components';
import './style.css';
/* import LanguageButton from './LangueButton'; */

// Styled components 

const StartPage = () => { 
	const [name, setName] = useState(''); // this is a hook and a state variable, this is a function that returns an array
	const [dateOfBirth, setDateOfBirth] = useState(''); // this is a hook and a state variable, this is a function that returns an array
	/*const [timeOfBirth, setTimeOfBirth] = useState('');
	const [placeOfBirth, setPlaceOfBirth] = useState('');*/

	const handleSubmit = (e) => { // this is a function that takes an event as an argument and returns nothing 
		e.preventDefault();
		fetch(`http://localhost:8080/zodiacSigns/${dateOfBirth}`, {
			method: 'GET',
			headers: {
			  'Content-Type': 'application/json',
			},
		  })
			.then((response) => response.json())
			.then((result) => {
			  // Handle the response from the backend
			  console.log(result);
			})
			.catch((error) => {
			  // Handle any errors that occur during the request
			  console.error(error);
			});

		// Perform any desired actions with the form data here
		console.log({
			name,
			dateOfBirth,
			/*timeOfBirth,
			placeOfBirth*/
		});
	};


/*console.log(dateOfBirth)
console.log(name) */

	return (
		<>
			<div className='P1Text'>
				<h1>Testing testing</h1>
				<p>Text text text</p>
			</div>
			<div className='P1Box'>
				<form onSubmit={handleSubmit} className='P1Form'>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required />

					<label htmlFor="dateOfBirth">Date of Birth:</label>
					<input
						type="date"
						id="dateOfBirth"
						value={dateOfBirth}
						onChange={(e) => setDateOfBirth(e.target.value)}
						required />

					{/* <label htmlFor="timeOfBirth">Time of Birth:</label>
					<input
						type="time"
						id="timeOfBirth"
						value={timeOfBirth}
						onChange={(e) => setTimeOfBirth(e.target.value)}
						required />

					<label htmlFor="placeOfBirth">Place of Birth:</label>
					<input
						type="text"
						id="placeOfBirth"
						value={placeOfBirth}
						onChange={(e) => setPlaceOfBirth(e.target.value)}
						required /> */}

					{/* <Link id="NatalBtn" to={`/natal`}>Submit</Link> */}
					{/*<Link id="NatalBtn" to={`/natal/${dateOfBirth}`}>Submit</Link> */}

				<button type="submit">Submit</button>
				</form>
			</div> 
		</>
	);
}


export default StartPage;



/*const StartPage = () => {

    return (
      <h1>Hello Mr Bond!</h1>

   
    );
  }


  export default StartPage; */