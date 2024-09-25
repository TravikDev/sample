import React from 'react';
import { LinearProgress, Box, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/system';
import EnergyIconPng from "@/assets/energy1.png"

// Компонент прогресс-бара
const EnergyProgress = styled(LinearProgress)(() => ({
   height: 24,
   border: '2px solid rgba(186, 242, 102, 0.50)', // Цвет рамки
   borderRight: "4px solid rgba(186, 242, 102, 0.50)",
   borderRadius: 12,
   boxSizing: 'border-box',
   backgroundColor: '#172931', // Фон полосы
   [`&.${linearProgressClasses.colorPrimary}`]: {
     backgroundColor: '#172931', // Цвет фона прогресса
   },
   [`& .${linearProgressClasses.bar}`]: {
     borderRadius: 10,
     background: 'linear-gradient(90deg, #62d96b, #d2ff8e)', // Градиент прогресса
     boxShadow: '0 0 10px rgba(186, 242, 102, 0.8)', // Эффект свечения
     transition: 'width 0.3s ease-in-out', // Плавное изменение ширины
     border: '1px solid #172931', // Цвет рамки
     borderRight: 0,
   },
 }));
interface EnergyBarProps {
  energy: number;
}


export const EnergyBar: React.FC<EnergyBarProps> = ({ energy }) => {
  return (
    <Box display="flex" alignItems="center" zIndex="6" width="80%" position="relative" bottom="35px">
      <EnergyProgress variant="determinate" value={energy} sx={{ width: '100', paddingRight: "265px" }} />

      <Box
        component="img"
        src={EnergyIconPng}  // Путь к иконке энергии
        alt="Energy Icon"
        sx={{
          position: 'absolute',
          right: "93%",
          top: '50%',
          transform: 'translateY(-50%)',
          height: 35,
          width: 35,

        }}
      />

      {/* Отображение процента энергии */}
      <Box
        position="absolute"
        left="139%"
        top="50%"
        color="#BAF266"
        fontWeight="bold"
        style={{ transform: 'translate(-50%, -50%)' }}
        
      >
        {energy}%
      </Box>
    </Box>
  );
};
