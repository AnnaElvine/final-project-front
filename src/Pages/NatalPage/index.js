import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const NatalPage = () => {
  const { id } = useParams();
  const [zodiacSign, setZodiacSign] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log('location', location.state.zodiac.zodiacSign);

  useEffect(() => {
    fetch(`http://localhost:8080/zodiacSigns/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch zodiac sign');
        }
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        setZodiacSign(data.zodiacSign);
      })
      .catch((error) => {
        console.error(error);
        setError('Error fetching zodiac sign');
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!zodiacSign) {
    return <div>Zodiac Sign: {location.state.zodiac.zodiacSign} Name: {location.state.name}</div>;
  }

  return (
    <div className="test">
      <h1>Zodiac Sign: {zodiac.zodiacSign}</h1>
    </div>
  );
};

export default NatalPage;
