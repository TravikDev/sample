import React from "react"
import coinIcon from "@/assets/Coin.svg"
import { CardDetailsModalProps, CardType } from "@/entities/cards/cards.dto"
import IconCoinBig from "@/assets/icons-react/CoinBig"
import IconCoin from "@/assets/icons-react/Coin"
import { Box, Typography, Divider } from "@mui/material"
import { Button } from "@mui/material"
import YoutubeIcon from "@mui/icons-material/YouTube"
import { DetailsModal } from "@/shared/ui/DetailsModal"

interface IProps {
  onSelectCard: (card: CardType) => void
  cards: CardType[]
  userCoins: number
  userSalary: number
}

export const CardsList = ({ onSelectCard, cards }: IProps) => {
  console.log("cards: ", cards)

  return (
    <Box
      sx={{
        overflowY: "auto",
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "16px",
        paddingBottom: "64px"
      }}
    >
      {cards.map((card) => (
        <Box
          key={card._id}
          sx={{
            borderRadius: "16px",
            backgroundColor: "primary.main",
            border: "1px solid #008f6d",
            borderBottom: "0",
            background: "#031E2B",
            // borderColor: card.variant === 'approved' ? 'green' : card.variant === 'new' ? 'blue' : 'grey',
            padding: "16px",
            display: "flex",
            cursor: "pointer"
          }}
          onClick={() => onSelectCard(card)}
        >
          <img
            src={card.urlPicture}
            width="108px"
            height="118px"
            alt="card image"
            style={{ borderRadius: "12px" }}
          />
          <Box
            sx={{
              marginLeft: "16px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "medium",
                  textTransform: "capitalize",
                  marginBottom: "8px",
                  maxWidth: "140px",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: "#FFE881", marginBottom: "8px" }}
              >
                lvl {card.level}
              </Typography>
            </Box>
            <Divider
              sx={{
                backgroundColor: "rgba(0, 143, 109, 0.1)",
                marginTop: "8px",
              }}
            />
            <Box
              sx={{
                marginTop: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "800",
                    paddingBottom: "3px",
                  }}
                >
                  {card.price}
                </Typography>
                <IconCoin width={25} height={25} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "9px", color: "white", opacity: 0.6 }}
                >
                  Прибыль в час
                </Typography>
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      letterSpacing: ".8px",
                    }}
                  >
                    +{card.rph}
                  </Typography>
                  <IconCoin width={25} height={25} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export const CardDetailsModal: React.FC<CardDetailsModalProps> = ({
  card,
  onClose,
  isView,
  onClickBuyCard,
}) => {
  return (
    <DetailsModal onClose={onClose} isView={isView} salary={0}>
      {/* Монеты и прибыль */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <IconCoinBig width={45} height={45} />
        <Typography sx={{ fontFamily: 'Roboto, sans-serif',fontWeight: '800', fontSize: 30, color: "#C8D5D8", letterSpacing: "1px" }}>{123}</Typography>
      </Box>

      <Divider sx={{ mb: 2, backgroundColor: 'rgba(0, 143, 109, 0.1)' }} />

      {/* Информация о карточке */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={card?.urlPicture}
          alt="card image"
          style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 12 }}
        />
        <Box sx={{ ml: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'capitalize', mb: 1 }}>
            {card?.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <YoutubeIcon sx={{ fill: "#b91f1f" }} />
            <Typography variant="body2" sx={{ color: 'gray', textDecoration: 'underline', margin: "3px 0" }}>
              Автор не указан
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.6, marginTop: '15px' }}>
              Прибыль в час
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                +{card?.rph}
              </Typography>
              <img src={coinIcon} alt="coin" style={{ width: 20, height: 20 }} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Описание карточки */}
      <Box sx={{ mt: "40px" }}>
        <Typography variant="body2" sx={{ color: 'white', opacity: 0.6, textAlign: 'center' }}>
          {card?.description}
        </Typography>
      </Box>

      {/* Кнопка */}
      <Button
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
        onClick={() => card && onClickBuyCard && onClickBuyCard(card._id)}
      >
        Подписаться
      </Button>
    </DetailsModal>
  );
};
