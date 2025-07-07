import React, { useEffect, useState } from 'react';
import PaperRocket from './PaperRocket';

const FastPaperRockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    // Create exactly 3 fast paper rockets
    const rocketElements = [];
    for (let i = 0; i < 3; i++) {
      rocketElements.push(<PaperRocket key={i} />);
    }
    setRockets(rocketElements);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {rockets}
    </div>
  );
};

export default FastPaperRockets; 