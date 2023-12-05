import React from 'react';
import { useParams } from 'react-router-dom';
import DealsDisplay from './DealsDisplay';

const TitleSearch = () => {
  const { affurl } = useParams();

  try {
    window.open(decodeURIComponent(affurl), '_blank');
  } catch (err) {
    console.log('An unexpected error occurred.');
  }

  return (
    <div>
      <DealsDisplay />
    </div>
  );
};

export default TitleSearch;
