import React from 'react';
import StartPage from './Pages/StartPage';
import NatalPage from './Pages/NatalPage';
import Footer from 'components/Footer';
import { Routes, Route } from "react-router-dom";


export const App = () => {

	return (
		<>
			<Routes>
				<Route path="/" element={<StartPage />}/>
				{/*<Route path="/natal" element={<NatalPage />}/> */}
				<Route path="/natal/:dateOfBirth" element={<NatalPage />}/>
			</Routes>
			<Footer />
		</>
	);
}


// this goes into the fronend folder
/// npm i react-redux
/// npm i @reduxjs/toolkit
/// npm i react-router-dom


