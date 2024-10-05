import React from "react"
import { LinearProgress, Box, linearProgressClasses } from "@mui/material"
import { styled } from "@mui/system"
import EnergyIconPng from "@/assets/energyIcon.svg"

// Компонент прогресс-бара
const EnergyProgress = styled(LinearProgress)(() => ({
  height: 24,
  border: "2px solid rgba(186, 242, 102, 0.50)", // Цвет рамки
  borderRight: "4px solid rgba(186, 242, 102, 0.50)",
  borderRadius: 12,
  boxSizing: "border-box",
  backgroundColor: "#172931", // Фон полосы
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#172931", // Цвет фона прогресса
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    background: "linear-gradient(90deg, #62d96b, #d2ff8e)", // Градиент прогресса
    boxShadow: "0 0 10px rgba(186, 242, 102, 0.8)", // Эффект свечения
    transition: "width 0.3s ease-in-out", // Плавное изменение ширины
    border: "1px solid #172931", // Цвет рамки
    borderRight: 0,
  },
}))
interface EnergyBarProps {
  energy: number
}

export const EnergyBar: React.FC<EnergyBarProps> = ({ energy }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      zIndex="6"
      width="80%"
      position="absolute"
      bottom="4.5%"
      right="8%"
      sx={{
        "@media (max-height: 760px)": { bottom: "2%" },
        "@media (max-height: 700px)": { bottom: "0.5%" },
      }}
    >
      <EnergyProgress
        variant="determinate"
        value={energy}
        sx={{
          width: "90%",
          "& .MuiLinearProgress-bar": {
            transition: "transform 0.7s ease", // Анимация изменения
          },
        }}
      />

      <Box
        component="img"
        src={EnergyIconPng}
        alt="Energy Icon"
        sx={{
          position: "relative",
          right: "90%",
          width: "70px",
          "@media (min-width: 725px)": { right: "92%" },
          "@media (max-width: 430px)": { right: "85%" },
        }}
      />

      {/* Отображение процента энергии */}
      <Box
        position="absolute"
        right="-8%"
        top="50%"
        color="#BAF266"
        fontWeight="bold"
        style={{ transform: "translate(-50%, -50%)" }}
        fontSize={21}
        sx={{
          "@media (min-width: 475px)": { right: "-7%" },
          "@media (max-width: 530px)": { right: "-9%" },
          "@media (min-width: 725px)": { right: "-4.5%" },
        }}
      >
        {energy}%
      </Box>
    </Box>
  )
}
