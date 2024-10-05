import React from "react"
import IconCoinBig from "@/assets/icons-react/CoinBig"
import { Box, Typography } from "@mui/material"
import { Button } from "@mui/material"
import { DetailsModal } from "@/shared/ui/DetailsModal"
// import ImgPyramide from "@/assets/pyramid.png"
import HeartImg from "@/assets/heart.png"
import WalletImg from "@/assets/walletIcon.png"

export interface DetailsModalProps {
  onClose: () => void;
  isView: boolean;
  salary: number;
  children?: React.ReactNode; // Изменяемый контент
}


export const WelcomeModal: React.FC<DetailsModalProps> = ({
  onClose,
  isView,
  salary
}) => {
  const handleButtonClick = () => {
    // Закрываем модальное окно
    onClose()
  }

  return (
    <DetailsModal onClose={onClose} isView={isView} salary={salary}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={WalletImg} width={148} height={148} />
        {/* div className="gradient-stroke-text" */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "800",
            fontSize: 28,
            color: "transparent",
            lineHeight: "110%",
            letterSpacing: "1.5px",
            background: "linear-gradient(to right, #c7f367, #02eaff 50%)",
            backgroundClip: "text",
            marginBottom: "4px",
            marginTop: "18px",
          }}
        >
          Paradox{" "}
          <span style={{ color: "white", fontWeight: "600" }}>не спал</span>
        </Typography>
        <Typography
          noWrap
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            letterSpacing: "1.5px",
            fontFamily: "Inter, sans-serif",
            textAlign: "center",
            "@media (max-width: 390px)": {
              fontSize: "14px",
            },
            display: "flex",
            gap: "8px",
          }}
        >
          <span style={{ opacity: 0.7 }}>и кое-что заработал для вас!</span>
          <img src={HeartImg} width={23} height={20} alt="Heart" />
        </Typography>
        <Typography
          noWrap
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            fontFamily: "Roboto, sans-serif",
            lineHeight: "35.20px",
            textAlign: "center",
            marginTop: "28px",
            marginBottom: "52px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ paddingRight: "15px" }}>+{salary}</span>
          <IconCoinBig
            width={44} //44
            height={44}
            style={{ paddingBottom: "5px" }}
          />
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "600",
            borderRadius: "16px",
            fontSize: "18px",
            letterSpacing: "1px",
            wordWwrap: "break-word",
            textTransform: "none",
            padding: "16px 0",
            boxShadow: "-2px -2px 2px rgba(0, 0, 0, 0.25) inset",
            background: "linear-gradient(45deg, #1d9988 0%, #5B5EF3 100%)",
          }}
          // Закрытие при нажатии на кнопку
          onClick={handleButtonClick}
        >
          Забрать монеты
        </Button>
      </Box>
    </DetailsModal>
  )
}
