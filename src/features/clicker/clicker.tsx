import { addOneClick, selectProfile } from '@/entities/profile/profileSlice';
import { useNewSelector } from '@/shared/hooks/storeActions';
import { Box, Button, Container, Drawer, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, List } from '@mui/material'; // Импорт необходимых компонентов
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import { Person } from '@mui/icons-material';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import styled from 'styled-components';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#fff',
  },
  [`& .${linearProgressClasses.bar}`]: {
    // borderRadius: 5,
    backgroundColor: '#191',
  },
}));

interface FloatNumber {
  id: number;
  x: number;
  y: number;
  value: number;
}

const App: React.FC = () => {

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const dispatch = useDispatch();
  const profile = useNewSelector(selectProfile);

  console.log(profile.clicks);

  const [clicks, setClicks] = useState(0);
  const [floatNumbers, setFloatNumbers] = useState<FloatNumber[]>([]);
  const [drawerTeamOpen, setDrawerTeamOpen] = useState(false); // Состояние для управления видимостью sidebar
  const [drawerBloggersOpen, setDrawerBloggersOpen] = useState(false); // Состояние для управления видимостью sidebar
  const [drawerQuestsOpen, setDrawerQuestsOpen] = useState(false); // Состояние для управления видимостью sidebar


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

  const onClickQuests = () => {
    setDrawerTeamOpen(!drawerTeamOpen); // Переключение видимости sidebar
  }

  const onClickProfile = () => {
    setDrawerTeamOpen(!drawerTeamOpen); // Переключение видимости sidebar
  }

  const onClick = () => {
    setDrawerTeamOpen(!drawerTeamOpen); // Переключение видимости sidebar
  }

  // Пример списка карточек
  const cardsList = [
    { id: 1, title: 'Lizard', description: 'Lizards are a widespread', image: 'https://images.vexels.com/content/199944/preview/girl-tablet-character-isometric-ddaf3e.png' },
    { id: 2, title: 'Frog', description: 'Frogs are amphibians', image: 'https://images.vexels.com/content/199944/preview/girl-tablet-character-isometric-ddaf3e.png' },
    { id: 3, title: 'Frog', description: 'Frogs are amphibians', image: 'https://images.vexels.com/content/199944/preview/girl-tablet-character-isometric-ddaf3e.png' },
    { id: 4, title: 'Frog', description: 'Frogs are amphibians', image: 'https://images.vexels.com/content/199944/preview/girl-tablet-character-isometric-ddaf3e.png' },
    { id: 5, title: 'Frog', description: 'Frogs are amphibians', image: 'https://images.vexels.com/content/199944/preview/girl-tablet-character-isometric-ddaf3e.png' },

    // Добавьте другие карточки по мере необходимости
  ];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '36px', height: '100%' }}>


      <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '28px' }}>
        <Button onClick={() => setDrawerTeamOpen(!drawerTeamOpen)} sx={{
          flexGrow: 1,
          // minWidth: '150px',
          backgroundColor: '#131',
          borderRadius: '10px',
          border: '2px solid white', // Установка границы
          color: 'white', // Цвет текста
          padding: '6px 6px', // Паддинг для лучшего вида 
          boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
          // paddingInline: '24px',
          minWidth: '186px'

        }}>
          <Typography style={{ color: 'white', fontSize: '20px' }}>PR Team</Typography>
        </Button>

        <Button onClick={() => setDrawerBloggersOpen(!drawerBloggersOpen)} sx={{
          flexGrow: 1,
          backgroundColor: '#131',
          borderRadius: '10px',
          border: '2px solid white', // Установка границы
          color: 'white', // Цвет текста
          padding: '6px 6px', // Паддинг для лучшего вида 
          boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
          // paddingInline: '24px',
          minWidth: '186px'
        }}>
          <Typography style={{ color: 'white', fontSize: '20px' }}>Bloggers</Typography>
        </Button>

      </Container>

      <button className="round-button" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={handleClick}>
        <Person sx={{ position: 'absolute', width: '50%', height: '50%', color: 'white' }} />
      </button>
      {floatNumbers.map((floatNumber) => (
        <div
          key={floatNumber.id}
          className="float-number"
          style={{ left: floatNumber.x, top: floatNumber.y }}
        >
          {floatNumber.value} {/* Отображаем сохранённое значение кликов */}
        </div>
      ))}
      {/* 
      <Box sx={{ width: '100%', height: '64px', backgroundColor: '#191', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', borderWidth: '2px', borderColor: 'white' }}>
        <p style={{ color: 'white', fontSize: '24px' }}>100%</p>
      </Box> */}

      <List sx={{ display: 'flex', flexDirection: 'row', gap: '24px', justifyContent: 'space-between' }}>

        <Button onClick={() => setDrawerQuestsOpen(!drawerQuestsOpen)} sx={{
          // flexGrow: 1,
          backgroundColor: '#131',
          borderRadius: '10px',
          border: '2px solid white', // Установка границы
          color: 'white', // Цвет текста
          padding: '6px 6px', // Паддинг для лучшего вида 
          boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
          // paddingInline: '20px',
          // minWidth: '186px'
        }}>
          {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
          <ChecklistRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />

        </Button>

        <Button onClick={() => setDrawerQuestsOpen(!drawerQuestsOpen)} sx={{
          // flexGrow: 1,
          backgroundColor: '#131',
          borderRadius: '10px',
          border: '2px solid white', // Установка границы
          color: 'white', // Цвет текста
          padding: '6px 6px', // Паддинг для лучшего вида 
          boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
          // paddingInline: '20px',
          // minWidth: '186px'
        }}>
          {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
          <Diversity1RoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
        </Button>
      </List>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ minWidth: 35 }}>
            <ElectricBoltRoundedIcon sx={{ color: '#fff' }} />
          </Box>
          <Box sx={{ width: '100%', mr: 1 }}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="white">{`${Math.round(
              progress,
            )}%`}</Typography>
          </Box>
        </Box>
      </Box>

      {/* PR Team */}

      <Drawer
        anchor="bottom"
        open={drawerTeamOpen}
        onClose={() => setDrawerTeamOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#191',
            color: 'white',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '20px',
            height: '60%', // Задаем высоту 60%
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', }}>
          {cardsList.map((card) => (
            <Card key={card.id} sx={{ display: 'flex', backgroundColor: '#fff', color: 'white', borderRadius: '10px', overflow: 'hidden', minHeight: 156 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={card.image}
                alt={card.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    PR Team
                  </Button>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Add me
          </Button>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>

      {/* Bloggers */}

      <Drawer
        anchor="bottom"
        open={drawerBloggersOpen}
        onClose={() => setDrawerBloggersOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#191',
            color: 'white',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '20px',
            height: '60%', // Задаем высоту 60%
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', }}>
          {cardsList.map((card) => (
            <Card key={card.id} sx={{ display: 'flex', backgroundColor: '#fff', color: 'white', borderRadius: '10px', overflow: 'hidden', minHeight: 156 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={card.image}
                alt={card.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    Bloggers
                  </Button>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Add me!
          </Button>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>

      {/* Quests */}

      <Drawer
        anchor="bottom"
        open={drawerBloggersOpen}
        onClose={() => setDrawerBloggersOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#191',
            color: 'white',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '20px',
            height: '60%', // Задаем высоту 60%
          },
        }}
      >
        <Box sx={{ width: '100%', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px', }}>
          {cardsList.map((card) => (
            <Card key={card.id} sx={{ display: 'flex', backgroundColor: '#fff', color: 'white', borderRadius: '10px', overflow: 'hidden', minHeight: 156 }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={card.image}
                alt={card.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    Share
                  </Button>
                  <Button size="small" color="primary" sx={{ color: 'rgba(57, 255, 20, 0.8)' }}>
                    Learn More
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Quests
          </Button>
          <Button sx={{ marginTop: '20px', color: 'white', borderColor: 'white' }} variant="outlined" onClick={() => setDrawerTeamOpen(false)}>
            Close
          </Button>
        </Box>
      </Drawer>

    </Container>
  );
};

export default App;
