import { addOneClick, selectProfile } from '@/entities/profile/profileSlice';
import { useNewSelector } from '@/shared/hooks/storeActions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';

interface FloatNumber {
  id: number;
  x: number;
  y: number;
  value: number;
}

const App: React.FC = () => {

  const dispatch = useDispatch();
  const profile = useNewSelector(selectProfile);

  console.log(profile.clicks);

  const [clicks, setClicks] = useState(0);
  const [floatNumbers, setFloatNumbers] = useState<FloatNumber[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newClicks = clicks + 1;
    setClicks(newClicks);
    const x = e.clientX;
    const y = e.clientY;
    const newFloatNumber: FloatNumber = {
      id: newClicks,
      x: x,
      y: y,
      value: newClicks, // Сохраняем текущее количество кликов
    };
    setFloatNumbers([...floatNumbers, newFloatNumber]);
    dispatch(addOneClick());

    setTimeout(() => {
      setFloatNumbers((current) =>
        current.filter((floatNumber) => floatNumber.id !== newFloatNumber.id)
      );
    }, 2000);
  };

  return (
    <>
      <button className="round-button" onClick={handleClick}>+</button>
      {floatNumbers.map((floatNumber) => (
        <div
          key={floatNumber.id}
          className="float-number"
          style={{ left: floatNumber.x, top: floatNumber.y }}
        >
          {floatNumber.value} {/* Отображаем сохранённое значение кликов */}
        </div>
      ))}
    </>
  );
};

export default App;
