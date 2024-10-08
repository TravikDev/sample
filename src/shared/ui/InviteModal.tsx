import React from "react"
import { Box, Typography } from "@mui/material"
import { Button } from "@mui/material"
import { DetailsModal } from "@/shared/ui/DetailsModal"

// @ts-ignore
const userData = window.Telegram.WebApp.initDataUnsafe;

type InviteModalProps = {
  onClose: () => void;
  isView: boolean;
}

// TODO: плавное закрытие модалки
export const InviteModal: React.FC<InviteModalProps> = ({
  onClose,
  isView,
}) => {



  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // alert("Текст скопирован!");
      })
      .catch((error) => {
        console.error("Ошибка при копировании: ", error);
      });
  };


  return (
    <DetailsModal onClose={onClose} isView={isView}>
      <Box sx={{
        display: 'flex', alignItems: 'center', flexDirection: 'column',
        textAlign: 'center', gap: '30px',
      }}>
        <Typography className='gradient-stroke-text' sx={{ fontSize: '25px', fontWeight: '800' }}>
          Пригласить друга
        </Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: '800' }}>
          {`https://t.me/LiveParadox_Bot/paradox?startapp=${userData.user.id}`}
        </Typography>
      </Box>

      <Button
        onClick={() => { handleCopy(`https://t.me/LiveParadox_Bot/paradox?startapp=${userData.user.id}`); onClose() }}
        fullWidth
        variant="contained"
        color="primary"
        sx={{
          mt: "52px",
          height: 56,
          fontWeight: '600',
          letterSpacing: '1px',
          borderRadius: '16px',
          fontSize: '18px',
          backgroundColor: '#026850',
          wordWwrap: "break-word",
          textTransform: "none",
          padding: "16px 0",
          boxShadow: "-2px -2px 2px rgba(0, 0, 0, 0.25) inset",
        }}
      >
        Скопировать
      </Button>

    </DetailsModal >
  );
};

