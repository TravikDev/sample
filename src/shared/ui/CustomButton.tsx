import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import teamIcon from '@/assets/icons/btns/teamIcon.png';

// Пропс для пути к иконке
interface CustomButtonProps {
  children: React.ReactNode;
  iconPath?: string; // Новый пропс для пути к иконке
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, iconPath }) => {

  return (
    <Button
      sx={{
        width: '180px',
        height: '60px',
        paddingLeft: '24px',
        paddingRight: '24px',
        paddingTop: '12px',
        paddingBottom: '12px',
        backgroundColor: '#0/31E2B',
        borderRadius: '20px',
        border: '1px solid #413894a4',
        borderBottom: '1px solid rgba(0, 143, 109, 0.2)',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'inline-flex',
        gap: '10px',
        '&:hover': {
          backgroundColor: '#031E2B',
        },
      }}
    >
      <Box
        sx={{
          width: '40px',
          height: '36px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '40px',
            height: '36px',
            position: 'absolute',
            backgroundColor: '#16263fd1 ',
            borderRadius: '11.33px',
            zIndex: -1,
          }}
        />
        {/* Используем iconPath для изображения иконки */}
        {iconPath && (
          <img 
            src={iconPath} 
            alt="Button Icon" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        )}
      </Box>

      <Typography
        sx={{
          color: 'white',
          fontSize: '16px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '500',
          lineHeight: '110%',
          textTransform: 'capitalize',
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default CustomButton;
