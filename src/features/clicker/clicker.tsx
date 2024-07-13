import { addOneClick, selectProfile } from '@/entities/profile/profileSlice';
import { useNewSelector } from '@/shared/hooks/storeActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';

interface FloatNumber {
  id: number;
  x: number;
  y: number;
}

const App: React.FC = () => {

    const dispatch = useDispatch()
    const profile = useNewSelector(selectProfile)

    console.log(profile.clicks)

  const [clicks, setClicks] = useState(0);
  const [floatNumbers, setFloatNumbers] = useState<FloatNumber[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setClicks(clicks + 1);
    const x = e.clientX;
    const y = e.clientY;
    const newFloatNumber: FloatNumber = {
      id: clicks,
      x: x,
      y: y,
    };
    setFloatNumbers([...floatNumbers, newFloatNumber]);
    dispatch(addOneClick())

    setTimeout(() => {
      setFloatNumbers((current) =>
        current.filter((floatNumber) => floatNumber.id !== newFloatNumber.id)
      );
    }, 2000);
  };

  return (
    <div className="container">
      <button className="round-button" onClick={handleClick}>+</button>
      {floatNumbers.map((floatNumber) => (
        <div
          key={floatNumber.id}
          className="float-number"
          style={{ left: floatNumber.x, top: floatNumber.y }}
        >
          {profile.clicks}
        </div>
      ))}
    </div>
  );
};

export default App;
