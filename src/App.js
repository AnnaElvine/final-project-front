import React from 'react';
import StartPage from './Pages/StartPage';
import NatalPage from './Pages/NatalPage';
import Footer from 'components/Footer';
import LanguageButton from 'components/LangueButton';
import { Routes, Route } from "react-router-dom";


export const App = () => {

	return (
		<>
			<LanguageButton />
			<Routes>
				<Route path="/" element={<StartPage />}/>
				<Route path="/natal" element={<NatalPage />}/>
			</Routes>
			<Footer />
		</>
	);
}


// this goes into the fronend folder
/// npm i react-redux
/// npm i @reduxjs/toolkit
/// npm i react-router-dom


