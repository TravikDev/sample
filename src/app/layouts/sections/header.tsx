import { useEffect, useState } from "react";
import IconCoins from "@/assets/icons/menu/coins.png";
import IconBoss from "@/assets/icons/menu/boss.png";
import IconRocket from "@/assets/icons/menu/rocket.png";
import IconTrophy from "@/assets/icons/menu/trophy.png";
import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectProfile } from "@/entities/profile/profileSlice";
import { Link } from "react-router-dom";
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import { Box, Button, Container, Icon, IconButton, Typography } from "@mui/material";
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';


const listMenu = [
  // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
  {
    id: 2,
    title: 'Главная',
    isActive: false,
    url: '/',
    icon:
      <MilitaryTechRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
  },
  { id: 3, title: 'Вывод', isActive: false, url: '/cards', icon: <HourglassEmptyRoundedIcon sx={{ color: 'rgba(57, 255, 20, 0.8)', width: '48px', height: '48px' }} /> },
  { id: 4, title: 'Приглашения', isActive: false, url: '/referral', icon: <HourglassEmptyRoundedIcon sx={{ color: 'rgba(57, 255, 20, 0.8)', width: '48px', height: '48px' }} /> }
];

export const Header = () => {

  const profile = useNewSelector(selectProfile)

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
      {/* {
                user &&
                <p>{user[0].id}: {user[0].name}</p>
            } */}

      <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', maxHeight: 64 }}>

        <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>


          <Link to='/'>
            {/* <Button sx={{
    backgroundColor: '#131',
    borderRadius: '10px',
    border: '2px solid white', // Установка границы
    color: 'white', // Цвет текста
    padding: '6px 6px', // Паддинг для лучшего вида 
    boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
  }}>
    <SpeedRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
  </Button> */}

            <Button>
              {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CurrencyBitcoinRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
                <Typography style={{ color: 'white', fontSize: '18px' }}>{profile.clicks}</Typography>
              </Box>
            </Button>
          </Link>



          {/* <p style={{ fontStyle: 'normal', fontSize: 48, color: 'rgba(57, 255, 20, 0.8)' }}>{profile.moneyPerHour}$</p> */}

        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row' }}>

        <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
          

            <Link to='/'>
              {/* <Button sx={{
              backgroundColor: '#131',
              borderRadius: '10px',
              border: '2px solid white', // Установка границы
              color: 'white', // Цвет текста
              padding: '6px 6px', // Паддинг для лучшего вида 
              boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
            }}>
              <SpeedRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
            </Button> */}

              <Button>
                {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} /> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SpeedRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
                  <Typography style={{ color: 'white', fontSize: '18px' }}>{profile.moneyPerHour}$/h</Typography>
                </Box>
              </Button>
            </Link>
          </Box>

          <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
            <Link to='/'>
              {/* <img height={36} width={36} src={IconCoins} alt='coins' /> */}
              {/* <Button sx={{
              backgroundColor: '#131',
              borderRadius: '10px',
              border: '2px solid white', // Установка границы
              color: 'white', // Цвет текста
              padding: '6px 6px', // Паддинг для лучшего вида 
              boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
            }}>
              <GradeRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
            </Button> */}

              <Button>
                {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} /> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <GradeRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
                  <Typography style={{ color: 'white', fontSize: '18px' }}>{profile.rank}</Typography>
                </Box>
              </Button>
            </Link>
            {/* <p style={{ fontStyle: 'normal', fontSize: 48, color: 'rgba(57, 255, 20, 0.8)' }}>{profile.rank}</p> */}
          </Box>

        </Box>

      </Container>



    </header >
  );
};
