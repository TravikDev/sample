import { addOneClick, selectProfile } from "@/entities/profile/profileSlice"
import { useNewSelector } from "@/shared/hooks/storeActions"
import {
  Box,
  Button,
  Container,
  Drawer,
  // Card, CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  List,
  Paper,
  IconButton,
  Divider,
  // Tabs, Divider
} from "@mui/material" // Импорт необходимых компонентов
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "../../shared/styles/global.scss"
// import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import {
  Fingerprint,
  // Person
} from "@mui/icons-material"
import LinearProgress, {
  // LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress"
import styled from "styled-components"
// import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
// import ElectricBoltRoundedIcon from '@mui/icons-material/ElectricBoltRounded';
// import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
// import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
// import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
// import { SvgChar } from '@/assets/SvgChar';
import TapCoin from "@/assets/Tap_coin.png"
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import { useTapMutation } from "@/entities/users/usersSlice"
import { io, Socket } from "socket.io-client"
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import { ReactComponent as CharSVG } from '../../assets/character.svg?react'
// import Bg from '@/assets/icons-react/Bg';
import ButtonCard01 from "@/assets/Button_open_cards.png"
import ButtonCard02 from "@/assets/Button_open_cards2.png"
// import Background from '@/assets/Background.png';
import BackgroundEffect from "@/assets/BgEffect-1.png"
import BackgroundEffect2 from "@/assets/BgEffect-2-png.png"
import { Link } from "react-router-dom"
import IconCoin from "@/assets/icons-react/Coin"
// import IconCoinBig from '@/assets/icons-react/CoinBig';

import CoinBig from "@/assets/CoinBig.png"

import ImgAvatar from "@/assets/9.png"
import ImgStar from "@/assets/Star_img.png"
import ImgStopwatch from "@/assets/Stopwatch_img.png"
import DividerSvg from "@/assets/icons-react/Divider"
import CardItem from "@/assets/icons-react/CardItem"
// import { EnergyIcon } from '@/assets/icons-react/EnergyIcon';
import ImgIconCard from "@/assets/Card2.png"
import ImgFotoArea from "@/assets/FotoArea.png"

import EnergyIconPng from "@/assets/energy1.png"
import { IconCloseModal } from "@/assets/icons-react/IconCloseModal"
import IconCoinBig from "@/assets/icons-react/CoinBig"
import { IconCard } from "@/assets/icons-react/IconCard"
import { IconCardPaid } from "@/assets/icons-react/IconCardPaid"
import { IconCoinS } from "@/assets/icons-react/IconCoinS"
import { CardType } from "@/entities/cards/cards.dto"
import { cards } from "@/entities/cards/cardsSlice"
import { CardDetailsModal, CardsList } from "@/features/cards/cards"
// import { ProgressLine } from '@/assets/icons-react/ProgressLine';

type User = {
  _id: number
  idTelegram: number
  username: string
  level: number
  salary: number
  rating: number
  energy: number
  coins: number
  dateRegistartion: string
  dateSalary: string
  dateUpdated: string
  dateOnline: string
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

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
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#fff",
  },
  [`& .${linearProgressClasses.bar}`]: {
    // borderRadius: 5,
    backgroundColor: "#191",
  },
}))

interface FloatNumber {
  id: number
  x: number
  y: number
  value: number
}

const StyledButton = styled(Button)({
  "&:focus": {
    animation: "none",
  },
  "&:active": {
    animation: "none",
  },
  "&:hover": {
    animation: "none",
  },
})

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSlider = () => {
    setIsOpen(!isOpen)
  }

  const handleBackgroundClick = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  const [isOpen2, setIsOpen2] = useState(false)

  const toggleSlider2 = () => {
    setIsOpen2(!isOpen)
  }

  const handleBackgroundClick2 = () => {
    if (isOpen) {
      setIsOpen2(false)
    }
  }

  const [tap, { data, error, isLoading, isSuccess }] = useTapMutation()

  const [progress, setProgress] = React.useState(100)

  const [socket, setSocket] = useState<Socket | null>(null)
  const [socketId, setSocketId] = useState<string | undefined>("")
  const [isConnected, setIsConnected] = useState(false)
  const [pressCount, setPressCount] = useState(0)
  const [thresholdMessage, setThresholdMessage] = useState("")

  useEffect(() => {
    const newSocket = io("http://localhost:3501", {
      transports: ["websocket"], // Принудительное использование WebSocket
      autoConnect: true,
    })

    setSocket(newSocket)

    // Обработчик события успешного подключения
    newSocket.on("connect", () => {
      console.log("Connected to server:", newSocket.id)
      setSocketId(newSocket.id)
      setIsConnected(newSocket.connected)
    })

    // Обработчик события разрыва соединения
    newSocket.on("disconnect", () => {
      console.log("Disconnected from server")
      setSocketId("")
      setIsConnected(false)
    })

    newSocket.on("buttonPressAck", (data) => {
      console.log("data: ", data.result)
      // setProgress(data.result.energy)
      const { coins, energy } = data.result
      setData2((state) => ({ ...state, coins, energy }))
      // onClick
    })

    newSocket.on("thresholdReached", (data) => {
      setThresholdMessage(
        `Threshold reached! Total presses: ${data.pressCount}`
      )
    })

    // Очистка при размонтировании компонента
    return () => {
      newSocket.close()
    }
  }, [])

  // Функция для обработки нажатия на кнопку
  const handleButtonPress = () => {
    if (socket && socket.connected) {
      socket.emit(
        "buttonPress",
        { message: "Button pressed!", id: 10 },
        socketId
      )
    } else {
      console.log("Socket is not connected")
    }

    /* @ts-ignore */
    handleClick(event)
  }

  const onClickTap = async () => {
    const result = await tap(10).unwrap()

    console.log("Result: ", result)

    // if (isSuccess)
    console.log("DATA: ", data)
    console.log("ERROR: ", error)
    console.log("Loading: ", isLoading)
    console.log("Success: ", isSuccess)
  }

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const dispatch = useDispatch()
  const profile = useNewSelector(selectProfile)

  // console.log(profile?.clicks);

  const [clicks, setClicks] = useState(0)
  const [floatNumbers, setFloatNumbers] = useState<FloatNumber[]>([])
  const [drawerTeamOpen, setDrawerTeamOpen] = useState(false) // Состояние для управления видимостью sidebar
  const [drawerBloggersOpen, setDrawerBloggersOpen] = useState(false) // Состояние для управления видимостью sidebar
  const [drawerQuestsOpen, setDrawerQuestsOpen] = useState(false) // Состояние для управления видимостью sidebar
  //?
  const [showShare, setShowShare] = useState(false)
  const [selectedCard, setSelectedCard] = useState<CardType>(cards[0])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newClicks = clicks + 1
    // setClicks(newClicks)
    const x = e.clientX - 50
    const y = e.clientY - 250
    let z = 1
    if (!data2.energy) z = 0
    const newFloatNumber: FloatNumber = {
      id: newClicks,
      x: x,
      y: y,
      value: z, // Сохраняем текущее количество кликов
    }
    setFloatNumbers([...floatNumbers, newFloatNumber])
    dispatch(addOneClick())

    setTimeout(() => {
      setFloatNumbers((current) =>
        current.filter((floatNumber) => floatNumber.id !== newFloatNumber.id)
      )
    }, 2000)

    // onClickTap()
  }

  const onClickQuests = () => {
    setDrawerTeamOpen(!drawerTeamOpen) // Переключение видимости sidebar
  }

  const onClickProfile = () => {
    setDrawerTeamOpen(!drawerTeamOpen) // Переключение видимости sidebar
  }

  const onClick = () => {
    setDrawerTeamOpen(!drawerTeamOpen) // Переключение видимости sidebar
  }

  //?
  const handleShareCard = (card: CardType) => {
    setSelectedCard(card)
    setShowShare(true)
  }

  const handleClearAndCloseModal = () => {
    setShowShare(false)
  }

  // Пример списка карточек
  const [cardsList, setCardsList] = useState([
    {
      "_id": 1,
      "title": "NewCard",
      "description": "description",
      "level": 1,
      "salary": 10,
      "rph": 1,
      "progress": 0,
      "urlPicture": "http://google.com",
      "price": 100,
      "dateCreation": "1",
      "upgradeCost": 0
    },
  ])

  const [cardsCategoriesList, setCardsCategoriesList] = useState([
    { id: 1, title: "Все" },
    { id: 2, title: "Добавленные" },
    { id: 3, title: "Популярные" },
    { id: 4, title: "Новые" },
  ])

  const [animate, setAnimate] = useState(false)

  const handleClick2 = () => {
    setAnimate(!animate)
  }

  // TABS

  const [value, setValue] = useState(1)

  const handleChange3 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const [data2, setData2] = useState<User>({
    _id: 10,
    idTelegram: 0,
    username: "Tester",
    level: 1,
    salary: 1100,
    rating: 0,
    energy: 100,
    coins: 0,
    dateRegistartion: "0",
    dateSalary: "0",
    dateUpdated: "0",
    dateOnline: "1724591195368",
  })
  const [loading, setLoading] = useState(true)
  const [error2, setError2] = useState<unknown | null>(null)

  useEffect(() => {
    if (isOpen === true) {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3501/cards")
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          const jsonData = await response.json()
          console.log('json Cards:', jsonData)
          setCardsList(jsonData)
          return jsonData
          // setData2(jsonData); // Устанавливаем полученные данные в состояние
          return jsonData
        } catch (err) {
          setError2(err) // Устанавливаем ошибку в случае неудачи
        } finally {
          setLoading(false) // Отключаем индикатор загрузки
        }
      }
      /* @ts-ignore */
      // const res = result()

      const response = fetchData()

      console.log('response2:', response)
    }
  }, [isOpen])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3501/users/9")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const jsonData = await response.json()
        console.log(jsonData)
        setData2(jsonData) // Устанавливаем полученные данные в состояние
        return jsonData
      } catch (err) {
        setError2(err) // Устанавливаем ошибку в случае неудачи
      } finally {
        setLoading(false) // Отключаем индикатор загрузки
      }
    }
    /* @ts-ignore */
    // const res = result()

    const response = fetchData()

    /* @ts-ignore */
    setProgress(response?.result?.energy)
  }, [])
  //


  return (
    <article
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
    >
      {(isOpen || isOpen2) && (
        <div
          className="slider-background"
          onClick={handleBackgroundClick}
        ></div>
      )}

      {/* <button onClick={toggleSlider} className="slider-toggle-btn">
        {isOpen ? "Close Slider" : "Open Slider"}
      </button> */}
      <Box className={`slider ${isOpen ? "open" : ""}`} sx={{}}>
        <Box
          // className="slider-content"
          sx={{
            color: "#fff",
            gap: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingBlock: 1,
              height: 22,
            }}
          >
            <IconButton onClick={handleBackgroundClick}>
              <IconCloseModal style={{ width: "25px", height: "25px" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              paddingInline: "35px",
              gap: 1,
              display: "flex",
              flexDirection: "column",
              height: '80vh'
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: 40,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <IconCoinBig width={44} height={44} />
                <Typography sx={{ fontWeight: "800", fontSize: 24 }}>
                  19, 324
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ fontSize: "10px", fontWeight: 200, lineHeight: 1 }}
                >
                  Прибыль в час
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>
                    +321
                  </Typography>
                  <IconCoin width={25} height={25} />
                </Box>
              </Box>
            </Box>

            <Divider sx={{ color: "#333", backgroundColor: 'rgba(0, 143, 109, 0.1)' }} />

            <Box
              sx={{
                display: "flex",
                flex: 1,
                borderRadius: "8px",
                backgroundColor: "rgba(27, 46, 55, 0.5)",
                p: "4px",
                gap: 1,
                justifyContent: "space-between",
              }}
            >
              {cardsCategoriesList.map((cat) => (
                <Box
                  key={cat.id}
                  className={cat.id === 1 ? "cardsCategories" : ""}
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "8px",
                    borderRadius: "6px",
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 10,
                    fontWeight: 500,
                  }}
                >
                  {cat.title}
                </Box>
              ))}
            </Box>

            <CardsList onSelectCard={handleShareCard} cards={cardsList}  />
          </Box>
        </Box>
      </Box>

      {/* {isOpen2 && (
        <div
          className="slider2-background"
          onClick={() => setIsOpen2((state) => !state)}
        ></div>
      )} */}

      {/* <button onClick={toggleSlider2} className="slider2-toggle-btn" style={{ position: 'absolute' }}>
        {isOpen2 ? 'Close Slider' : 'Open Slider'}
      </button> */}

      <CardDetailsModal
        card={selectedCard}
        onClose={handleClearAndCloseModal}
        isView={showShare}
      />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "12px",
            paddingBottom: "24px",
            width: "100%",
          }}
        >
          {/* {
                user &&
                <p>{user[0].id}: {user[0].name}</p>
            } */}

          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              maxHeight: 48,
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <Button>
                  {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} /> */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img src={ImgAvatar} style={{ width: 40, height: 40 }} />
                    {/* <ImgAvatar /> */}
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <img src={ImgStar} style={{ width: 28, height: 28 }} />
                      <Typography style={{ color: "white", fontSize: "18px" }}>
                        {profile?.rank}123
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Link>
              {/* <p style={{ fontStyle: 'normal', fontSize: 48, color: 'rgba(57, 255, 20, 0.8)' }}>{profile.rank}</p> */}
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
              {/* <p style={{ fontStyl: 'normal', fontSize: 48, color: 'rgba(57, 255, 20, 0.8)' }}>{profile.moneyPerHour}$</p> */}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img src={ImgStopwatch} style={{ width: 28, height: 28 }} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{ color: "white", fontSize: "9px", opacity: 0.6 }}
                    >
                      Прибыль в час
                    </span>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "15.4px",
                          letterSpacing: "0.3%",
                          alignContent: "flex-end",
                        }}
                      >
                        +{data2?.salary}
                      </span>
                      <IconCoin width={25} height={25} />
                    </Box>
                  </Box>
                </Box>
                {/* </Button> */}
                {/* </Link> */}
              </Box>
            </Box>
          </Container>
        </header>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ zIndex: 50 }} onClick={toggleSlider}>
              <img src={ButtonCard01} />
            </div>

            <div
              style={{ zIndex: 50 }}
              onClick={() => setDrawerBloggersOpen(!drawerBloggersOpen)}
            >
              <img src={ButtonCard02} />
            </div>
          </List>
        </Container>

        <DividerSvg />

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            zIndex: 10,
            paddingTop: "28px",
            position: "relative",
          }}
        >
          {/* <Divider sx={{ color: 'white' }} /> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <IconCoinBig  /> */}
            <img src={CoinBig} />
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "600",
                // width: '70%'
              }}
            >
              {data2?.coins}
            </Typography>
          </Box>

          <img
            src={BackgroundEffect2}
            style={{
              position: "absolute",
              zIndex: 5,
              left: "0%",
              top: "0%",
              width: "100%",
              height: "500px",
            }}
          />
        </Container>

        <Box
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 30,
            display: "flex",
          }}
        >
          <div>
            <div
              className="round-button"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: "20%",
                // position: 'absolute'
              }}
              onClick={handleButtonPress}
            >
              <img
                src={TapCoin}
                width={292}
                height={292}
                style={{ zIndex: 60, pointerEvents: "none" }}
              />
            </div>
          </div>

          {floatNumbers.map((floatNumber) => (
            <div
              key={floatNumber.id}
              className="float-number"
              style={{
                left: floatNumber.x,
                top: floatNumber.y,
                fontWeight: "700",
              }}
            >
              {floatNumber.value ? `+${floatNumber.value}` : "+0"}{" "}
              {/* Отображаем сохранённое значение кликов */}
            </div>
          ))}
        </Box>

        {/* 
        <div className="progress-container">
          <div className="progress-bar">
            <div className="glow-circle"></div>
          </div>
        </div> */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "18px",
            stroke: "rgba(186, 242, 102, 0.5)",
            strokeWidth: 2,
            height: 100,
            width: "80%",
            gap: 4,
          }}
        >
          {/* <EnergyIcon  /> */}
          {/* <div style={{ borderColor: 'rgba(186, 242, 102, 0.5)', borderRadius: 25, borderWidth: '2px', backgroundColor: 'GrayText' }}>
            ________
          </div> */}
          <img src={EnergyIconPng} style={{ position: "absolute" }} />
          {/* <ProgressLine width={150} /> */}

          {/* <div style={{ backgroundColor: '#fff', borderColor: '#BAF266', borderWidth: '2px', borderRadius: 25, stroke: 'GrayText', width: '100%' }}>
            .
          </div> */}

          <svg height={20} version="1.1" xmlns="http://www.w3.org/2000/svg">
            {/* <circle className="stroke-1" cx="30" cy="30" r="20" width={200} />
             */}
            <rect
              className="stroke-1"
              x="10"
              width="95%"
              height="20"
              rx="10"
              ry="10"
            />
          </svg>

          <span style={{ color: "#BAF266", fontWeight: "600" }}>
            {data2.energy}%
          </span>
        </div>
        {/* 
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ minWidth: 35 }}>
              <ElectricBoltRoundedIcon sx={{ color: '#fff' }} />
            </Box>
            <Box sx={{ width: '100%', mr: 1 }}>
              <BorderLinearProgress variant="determinate" value={data2.energy} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="white">{`${Math.round(
                data2.energy,
              )}%`}</Typography>
            </Box>
          </Box>
        </Box> */}

        {/* PR Team */}



        {/* Bloggers */}

      </Container>

      <img
        src={BackgroundEffect}
        style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 5 }}
      />
    </article>
  )
}

export default App
