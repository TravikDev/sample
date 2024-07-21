import { addOneClick, selectProfile } from '@/entities/profile/profileSlice';
import { useNewSelector } from '@/shared/hooks/storeActions';
import { Box, Button, Container, Drawer, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, List, Paper, IconButton, Tabs } from '@mui/material'; // Импорт необходимых компонентов
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import './App.css';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import { Fingerprint, Person } from '@mui/icons-material';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import styled from 'styled-components';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import { SvgChar } from '@/assets/SvgChar';
// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { ReactComponent as CharSVG } from '../../assets/character.svg?react'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



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

const StyledButton = styled(Button)({
  '&:focus': {
    animation: 'none',
  },
  '&:active': {
    animation: 'none',
  },
  '&:hover': {
    animation: 'none',
  }
});

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
    { id: 1, title: 'Lizard', description: 'Lizards are a widespread', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'white' },
    { id: 2, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s', color: 'white' },
    { id: 3, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'white' },
    { id: 4, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 5, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 6, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 7, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 8, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 9, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 10, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 11, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },
    { id: 12, title: 'Frog', description: 'Frogs are amphibians', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnlgnSfn_lCvpuKEc7Hc9FHr1Kw-yt0Yipw&s`', color: 'gold' },

    // Добавьте другие карточки по мере необходимости
  ];

  const [animate, setAnimate] = useState(false);

  const handleClick2 = () => {
    setAnimate(!animate);
  };

  // TABS

  const [value, setValue] = useState(1);

  const handleChange3 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', gap: '36px', height: '100%', justifyContent: 'center', alignItems: 'center' }}>


      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '28px', flex: 1 }}>
        {/* <Button onClick={() => setDrawerTeamOpen(!drawerTeamOpen)} sx={{
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
        </Button> */}


        <List sx={{ display: 'flex', flexDirection: 'row', gap: '24px', justifyContent: 'space-between', width: '100%' }}>

          <Button onClick={() => setDrawerTeamOpen(state => !state)} sx={{
            flexGrow: 1,
            // width: '50%',
            height: '64px',
            backgroundColor: '#131',
            borderRadius: '10px',
            border: '2px solid white', // Установка границы
            color: 'white', // Цвет текста
            // padding: '6px 6px', // Паддинг для лучшего вида 
            boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
            // paddingInline: '20px',
            // minWidth: '186px'
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
            <ChecklistRoundedIcon sx={{ color: '#fff', width: '36px', height: '36px' }} />
            <Typography sx={{ fontSize: '10px' }}>PR TEAM</Typography>
          </Button>

          <Button onClick={() => setDrawerBloggersOpen(state => !state)} sx={{
            flexGrow: 1,
            backgroundColor: '#131',
            width: '64px',
            height: '64px',
            borderRadius: '10px',
            border: '2px solid white', // Установка границы
            color: 'white', // Цвет текста
            // padding: '6px 6px', // Паддинг для лучшего вида 
            boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
            // paddingInline: '20px',
            // minWidth: '186px'
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
            <Diversity1RoundedIcon sx={{ color: '#fff', width: '48px', height: '36px' }} />
            <Typography sx={{ fontSize: '10px' }}>BLOGGERS</Typography>

          </Button>
        </List>

      </Container>

      {/* <button className="round-button" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', top: '20%' }} onClick={handleClick}>
      </button> */}

      <StyledButton onClick={handleClick} disableRipple sx={{ width: '100%', height: '100%' }}>
        <SvgChar style={{ zIndex: 10, height: '70%', position: 'absolute', bottom: '20%' }} />

      </StyledButton>


      <button
        className="round-button"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bottom: '15%', position: 'absolute' }}
        onClick={handleClick}
      >

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
            height: '80%', // Задаем высоту 60%
          },
        }}
      >

        <Box sx={{
          overflowY: 'auto',
          // display: 'flex', flexDirection: 'column', gap: '20px', 
          display: 'flex', flexDirection: 'row', gap: '18px', flexWrap: 'wrap'

        }}>
          {cardsList.map((card) => (
            <Paper elevation={3} key={card.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: `${card.color}`, color: 'white', borderRadius: '10px', minHeight: 128, maxWidth: '42%', padding: 1, gap: '8px' }}>
              <CardMedia
                component="img"
                sx={{ borderRadius: '10px' }}
                image={card.image}
                alt={card.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}>
                  {/* <Typography component="div" sx={{ color: 'rgba(57, 255, 20, 0.8)', fontSize: '16px', minWidth: '25vw' }}>
                    {card.title}
                  </Typography> */}
                  {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" sx={{ color: '#111' }}>
                    Mike Vazovskiy
                  </Button>
                  <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                  </IconButton>
                </CardActions>
              </Box>
            </Paper>
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
            backgroundColor: '#10771A',
            color: 'white',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            padding: '20px',
            height: '80%', // Задаем высоту 60%
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange3} aria-label="basic tabs example" sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
            '& .MuiTab-root': {
              color: 'white',
            },
            '& .Mui-selected': {
              color: 'white',
            }
          }}>
            <Tab label="Featured" color='#fff' {...a11yProps(0)} />
            <Tab label="Likely" {...a11yProps(1)} />
            <Tab label="New" {...a11yProps(2)} />
            {/* <Tab label="Others" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <Box sx={{ width: '100%', overflowY: 'auto' }}>

          <CustomTabPanel value={value} index={0}>

            <Box sx={{
              // overflowY: 'auto',
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px',
            }}>
              {cardsList.map((card) => (
                <Paper elevation={3} key={card.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: `${card.color}`, color: 'white', borderRadius: '10px', minHeight: 128, maxWidth: '42%', padding: 1, gap: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '10px' }}
                    image={card.image}
                    alt={card.title}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}>
                      {/* <Typography component="div" sx={{ color: 'rgba(57, 255, 20, 0.8)', fontSize: '16px', minWidth: '25vw' }}>
                    {card.title}
                  </Typography> */}
                      {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" sx={{ color: '#111' }}>
                        Mike Vazovskiy
                      </Button>
                      <IconButton aria-label="fingerprint" color="success">
                        <Fingerprint />
                      </IconButton>
                    </CardActions>
                  </Box>
                </Paper>
              ))}

            </Box>


          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            
          <Box sx={{
              // overflowY: 'auto',
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px',
            }}>
              {cardsList.map((card) => (
                <Paper elevation={3} key={card.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: `${card.color}`, color: 'white', borderRadius: '10px', minHeight: 128, maxWidth: '42%', padding: 1, gap: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '10px' }}
                    image={card.image}
                    alt={card.title}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}>
                      {/* <Typography component="div" sx={{ color: 'rgba(57, 255, 20, 0.8)', fontSize: '16px', minWidth: '25vw' }}>
                    {card.title}
                  </Typography> */}
                      {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" sx={{ color: '#111' }}>
                        ЯЯЯЯЯ
                      </Button>
                      <IconButton aria-label="fingerprint" color="success">
                        <Fingerprint />
                      </IconButton>
                    </CardActions>
                  </Box>
                </Paper>
              ))}

            </Box>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            
            
          <Box sx={{
              // overflowY: 'auto',
              display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px',
            }}>
              {cardsList.map((card) => (
                <Paper elevation={3} key={card.id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: `${card.color}`, color: 'white', borderRadius: '10px', minHeight: 128, maxWidth: '42%', padding: 1, gap: '8px' }}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: '10px' }}
                    image={card.image}
                    alt={card.title}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ padding: '0px', display: 'flex', justifyContent: 'center' }}>
                      {/* <Typography component="div" sx={{ color: 'rgba(57, 255, 20, 0.8)', fontSize: '16px', minWidth: '25vw' }}>
                    {card.title}
                  </Typography> */}
                      {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                    {card.description}
                  </Typography> */}
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" sx={{ color: '#111' }}>
                        ЫЫЫЫ
                      </Button>
                      <IconButton aria-label="fingerprint" color="success">
                        <Fingerprint />
                      </IconButton>
                    </CardActions>
                  </Box>
                </Paper>
              ))}

            </Box>

          </CustomTabPanel>
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
      {/* 
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
      </Drawer> */}

    </Container>
  );
};

export default App;
