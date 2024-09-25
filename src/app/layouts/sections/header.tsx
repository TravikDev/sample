import { useEffect, useState } from "react";
// import IconCoins from "@/assets/icons/menu/coins.png";
// import IconBoss from "@/assets/icons/menu/boss.png";
// import IconRocket from "@/assets/icons/menu/rocket.png";
// import IconTrophy from "@/assets/icons/menu/trophy.png";
// import { useNewSelector } from "@/shared/hooks/storeActions";
// import { selectProfile } from "@/entities/profile/profileSlice";
// import { Link } from "react-router-dom";
// import SavingsIcon from '@mui/icons-material/Savings';
// import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
// import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
// import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
// import { Box, Button, Container, Typography } from "@mui/material";
// import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
// import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
// import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';




// const listMenu = [
//   // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
//   {
//     id: 2,
//     title: 'Главная',
//     isActive: false,
//     url: '/',
//     icon:
//       <MilitaryTechRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
//   },
//   { id: 3, title: 'Вывод', isActive: false, url: '/cards', icon: <HourglassEmptyRoundedIcon sx={{ color: 'rgba(57, 255, 20, 0.8)', width: '48px', height: '48px' }} /> },
//   { id: 4, title: 'Приглашения', isActive: false, url: '/referral', icon: <HourglassEmptyRoundedIcon sx={{ color: 'rgba(57, 255, 20, 0.8)', width: '48px', height: '48px' }} /> }
// ];

export const Header = () => {


  // const profile = useNewSelector(selectProfile)

  const [user, setUser] = useState<{ id: number, name: string }[]>([{ id: 123, name: "string" }]);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <header style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingBlock: '24px' }}>

      {/* <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', maxHeight: 48 }}>

        <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
          <Link to='/'>

            <Button>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                <img src={ImgAvatar} style={{ width: 40, height: 40 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <img src={ImgStar} style={{ width: 28, height: 28 }} />
                  <Typography style={{ color: 'white', fontSize: '18px' }}>{profile?.rank}123</Typography>
                </Box>
              </Box>
            </Button>
          </Link>
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>


        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

          <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <img src={ImgStopwatch} style={{ width: 28, height: 28 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'white', fontSize: '9px', opacity: 0.6 }}>Прибыль в час</span>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '700', lineHeight: '15.4px', letterSpacing: '0.3%', alignContent: 'flex-end' }}>+{profile?.moneyPerHour}123</span>
                  <IconCoin
                  />
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>

      </Container> */}



    </header >
  );
};
