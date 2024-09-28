import { Box, Button, Typography } from '@mui/material';
import React from 'react';

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
        padding: '12px 24px',
        backgroundColor: '#0/31E2B',
        borderRadius: '20px',
        border: '1px solid #413894a4',
        borderBottom: '1px solid rgba(0, 143, 109, 0.2)',
        // alignItems: 'center',
        // display: 'inline-flex',
        gap: '15px',
        '&:hover': {
          backgroundColor: '#031E2B',
        },
        '@media (max-width: 424px)': {
          width: "150px",
          padding: "0px",
        },
        '@media (max-width: 350px)': {
          left: "-12%",
        }
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
