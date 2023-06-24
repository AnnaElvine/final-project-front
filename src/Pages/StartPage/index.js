/*import React from 'react'; */
import { Link, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react'; 
import styled from 'styled-components';
import './style.css';

// Styled components 


const StartPage = () => { 
	const [name, setName] = useState(''); // this is a hook and a state variable, this is a function that returns an array
	const [dateOfBirth, setDateOfBirth] = useState(''); // this is a hook and a state variable, this is a function that returns an array
	/*const [timeOfBirth, setTimeOfBirth] = useState('');
	const [placeOfBirth, setPlaceOfBirth] = useState('');*/
	const [zodiac, setZodiac] = useState({});
	const navigate = useNavigate();


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
			  console.log('result', result);
			  setZodiac(result);
			  navigate(`/natal/${dateOfBirth}`, {state:{zodiac:result, name}})
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

					

				<button type="submit">Submit</button>
				</form>
			</div> 
		{/*	{zodiac && (<p>My Zodiac Sign is: {zodiac.zodiacSign}</p>)} */}

		</>
	);
}


export default StartPage;