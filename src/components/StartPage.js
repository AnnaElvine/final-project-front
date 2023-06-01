/*import React from 'react'; */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React, { useState } from 'react'; 
import styled from 'styled-components';

// What I need to do for create a astrological chart:    
// 1. create a form with the following fields:
//    - name
//    - date of birth
//    - time of birth
//    - place of birth
// 2. create a button that will send the data to the backend (Ask Daniel 1:1's - Fri 2023-06-02 14:00 - 14:30)
// 3. create a page that will show the astrological chart (Ask Matilda 1:1's - Mon 2023-06-12 11:30-12:00)

// building the form
// 1. create a component for the form
// 2. create a component for the button
// 3. create a component for the page that will show the astrological chart




// Styled components 










// what does this do?   
function Form() { // this is a component that returns a form 
  const [name, setName] = useState(''); // this is a hook and a state variable, this is a function that returns an array
  const [dateOfBirth, setDateOfBirth] = useState(''); // this is a hook and a state variable, this is a function that returns an array
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');


  const handleSubmit = (e) => { // this is a function that takes an event as an argument and returns nothing 
    e.preventDefault();

    // Perform any desired actions with the form data here
    console.log({
      name,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth
    });
  };



  return (
    <><div className='P1Text'>
          <h1>Enter your details</h1>
          <p>Enter your name, date of birth, time of birth and place of birth to get your astrological chart 🖤</p>
      </div>
      <div className='P1Box'>
        <form className='P1Form'>
              <form onSubmit={handleSubmit}>
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

                  <label htmlFor="timeOfBirth">Time of Birth:</label>
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
                      required />

                  <button type="submit">Submit</button>
              </form></form>
          </div></>
  );
}

export default Form;




/*const StartPage = () => {

    return (
      <h1>Hello Mr Bond!</h1>

   
    );
  }


  export default StartPage; */