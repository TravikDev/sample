import { addOneClick } from "@/entities/profile/profileSlice"
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  IconButton,
  Divider,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "../../shared/styles/global.scss"
import TapCoin from "@/assets/Tap_coin.png"
import { io, Socket } from "socket.io-client"
import BackgroundEffect from "@/assets/BgEffect-1.png"
import BackgroundEffect2 from "@/assets/BgEffect-2-png.png"
import { Link, useLocation } from "react-router-dom"

import IconCoin from "@/assets/icons-react/Coin"
import CoinBig from "@/assets/CoinBig.png"
import ImgStopwatch from "@/assets/Stopwatch_img.png"
import DividerSvg from "@/assets/icons-react/Divider"
import { IconCloseModal } from "@/assets/icons-react/IconCloseModal"
import IconCoinBig from "@/assets/icons-react/CoinBig"
import { CardDetailsModal, CardsList } from "@/features/cards/cards"
import CustomButton from "@/shared/ui/CustomButton"
import teamIcon from "@/assets/icons/btns/teamIcon.svg"
import blogerIcon from "@/assets/icons/btns/blogerIcon.svg"
import { CardType, IUserCardType } from "@/entities/cards/cards.dto"

import ImgAvatar from "@/assets/9.png"
import ImgStar from "@/assets/Star_img.png"
import { EnergyBar } from "@/shared/ui/EnergyLine"
import { WelcomeModal } from "@/shared/ui/WelcomeModal"

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

interface FloatNumber {
  id: number
  x: number
  y: number
  value: number
}

// -------------------- Init 

const defaultCard = [{
  _id: 1,
  title: "NewCard",
  description: "description",
  level: 1,
  salary: 10,
  rph: 1,
  progress: 0,
  urlPicture: "http://google.com",
  price: 100,
  dateCreation: "1",
  upgradeCost: 0,
}]

const defaultMyCard = [
  {
    _id: 1,
    title: "NewCard",
    description: "description",
    level: 1,
    salary: 10,
    rph: 1,
    progress: 0,
    urlPicture: "http://google.com",
    price: 100,
    dateCreation: "1",
    upgradeCost: 0,
  },
]

const defaultCategories = [
  { id: 1, title: "Все" },
  { id: 2, title: "Мои" },
]

const defaultData = {
  _id: 0,
  idTelegram: 0,
  username: "Guest",
  level: 1,
  salary: 1100,
  rating: 0,
  energy: 0,
  coins: 0,
  dateRegistartion: "0",
  dateSalary: "0",
  dateUpdated: "0",
  dateOnline: "1724591195368",
}


const App: React.FC = () => {

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const userTelegramId = queryParams.get('userId');

  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2] = useState(false)
  const [progress, setProgress] = React.useState(0)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [socketId, setSocketId] = useState<string | undefined>("")
  const [isConnected, setIsConnected] = useState(false)
  const [thresholdMessage, setThresholdMessage] = useState("")


  const [clicks, setClicks] = useState(0)
  const [floatNumbers, setFloatNumbers] = useState<FloatNumber[]>([])
  const [drawerBloggersOpen, setDrawerBloggersOpen] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);

  const [welcomeSalary, setWelcomeSalary] = useState(0);


  const toggleSlider = () => {
    setIsOpen(!isOpen)
  }

  const handleBackgroundClick = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }



  const [cardsList, setCardsList] = useState(defaultCard)

  const [myCardsList, setMyCardsList] = useState(defaultMyCard)

  const [selectedCard, setSelectedCard] = useState<CardType>(cardsList[0])

  const [cardsCategoriesList] = useState(defaultCategories)

  const [activeTab, setActiveTab] = useState(cardsCategoriesList[0])

  const [data2, setData2] = useState<User>(defaultData)
  const [loading, setLoading] = useState(true)
  const [error2, setError2] = useState<unknown | null>(null)

  console.log(loading, error2)
  console.log(progress, isConnected, thresholdMessage,)


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newClicks = clicks + 1;

    setClicks(newClicks)

    const x = e.clientX - 50;
    const y = e.clientY - 250;
    let z = 1;

    let newEnergy = data2.energy - 1;
    if (newEnergy < 0) newEnergy = 0;
    setData2((prev) => ({ ...prev, energy: newEnergy }));

    if (!data2.energy) z = 0;
    const newFloatNumber: FloatNumber = {
      id: newClicks,
      x: x,
      y: y,
      value: z,
    };
    setFloatNumbers([...floatNumbers, newFloatNumber]);
    dispatch(addOneClick());

    setTimeout(() => {
      setFloatNumbers((current) =>
        current.filter((floatNumber) => floatNumber.id !== newFloatNumber.id)
      );
    }, 2000);

  };

  const handleButtonPress = () => {
    if (socket && socket.connected) {
      socket.emit(
        "buttonPress",
        { message: "Button pressed!", id: data2._id },
        socketId
      )
    } else {
      console.log("Socket is not connected")
    }

    /* @ts-ignore */
    handleClick(event)
  }


  const onClickBuyCard = async (cardId: number) => {

    const body = JSON.stringify({ userId: data2._id, cardId })

    try {
      const response = await fetch("https://paradoxlive.pro/user-cards/assign", {
        method: 'POST', body, headers: {
          "Content-Type": "application/json",
        }
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const jsonData = await response.json()
      // console.log("json Cards:", jsonData)
      return jsonData
      // const filteredData = jsonData.map((card: IUserCardType) => card.card)
      // setMyCardsList(filteredData)
      // return jsonData
      // setData2(jsonData); // Устанавливаем полученные данные в состояние
    } catch (err) {
      setError2(err)
    } finally {
      setLoading(false)
    }
  }

  const handleShareCard = (card: CardType) => {
    setSelectedCard(card)
    setShowShare(true)
  }

  const handleClearAndCloseModal = () => {
    setShowShare(false)
  }

  const handleCloseWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
    sessionStorage.setItem("welcomeModalShown", "true"); // Используем sessionStorage вместо localStorage
  };

  // ------------------- useEffects

  useEffect(() => {
    const newSocket = io("https://paradoxlive.pro", {
      transports: ["websocket"],
      autoConnect: true,
    })

    setSocket(newSocket)

    newSocket.on("connect", () => {
      console.log("Connected to server:", newSocket.id)
      setSocketId(newSocket.id)
      setIsConnected(newSocket.connected)
    })

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server")
      setSocketId("")
      setIsConnected(false)
    })

    newSocket.on("buttonPressAck", (data) => {
      console.log("data: ", data.result)
      const { coins, energy } = data.result
      setData2((state) => ({ ...state, coins, energy }))
    })

    newSocket.on("thresholdReached", (data) => {
      setThresholdMessage(
        `Threshold reached! Total presses: ${data.pressCount}`
      )
    })

    return () => {
      newSocket.close()
    }
  }, [])


  // useEffect(() => {

  //   const welcomeModalShown = sessionStorage.getItem("welcomeModalShown");
  //   if (!welcomeModalShown) {

  //     if (data2.idTelegram) {
  //       const fetchData = async () => {
  //         try {
  //           const response = await fetch(`https://paradoxlive.pro/users/update/${data2._id}`, { method: 'POST' })
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok")
  //           }
  //           const jsonData = await response.json()
  //           console.log(jsonData)
  //           setWelcomeSalary(jsonData)

  //         } catch (err) {
  //           setError2(err)
  //         }
  //       }

  //       fetchData()
  //     }
  //   }
  // }, [data2.idTelegram]);

  // useEffect(() => {
  //   if (welcomeSalary) setIsWelcomeModalOpen(true);
  // }, [welcomeSalary])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`https://paradoxlive.pro/users/telegram/${userTelegramId}`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const jsonData = await response.json()
        console.log(jsonData)
        setData2(jsonData) // Устанавливаем полученные данные в состояние

        setProgress(jsonData.result?.energy)

      } catch (err) {
        setError2(err) // Устанавливаем ошибку в случае неудачи
      } finally {
        setLoading(false) // Отключаем индикатор загрузки
      }
    }

    fetchData()
  }, [])



  useEffect(() => {
    if (activeTab.id === 2) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://paradoxlive.pro/user-cards/${data2._id}`)
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          const jsonData = await response.json()
          console.log("json Cards:", jsonData)
          const filteredData = jsonData.map((card: IUserCardType) => card.card)
          setMyCardsList(filteredData)
          return jsonData
          // setData2(jsonData); // Устанавливаем полученные данные в состояние
        } catch (err) {
          setError2(err) // Устанавливаем ошибку в случае неудачи
        } finally {
          setLoading(false) // Отключаем индикатор загрузки
        }
      }
      /* @ts-ignore */
      // const res = result()

      const response = fetchData()
    }
  }, [activeTab])


  useEffect(() => {
    if (isOpen === true) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://paradoxlive.pro/cards")
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          const jsonData = await response.json()
          console.log("json Cards:", jsonData)
          setCardsList(jsonData)
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

      console.log("response2:", response)
    }
  }, [isOpen])

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

      {/* onClose - собирать монеты */}
      <WelcomeModal
        isView={isWelcomeModalOpen}
        onClose={handleCloseWelcomeModal}
        // salary={welcomeSalary}
        salary={0}
      />

      <Box className={`slider ${isOpen ? "open" : ""}`} sx={{}}>
        <Box
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
              height: "80vh",
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
                <Typography sx={{ fontWeight: "800", fontSize: 30, paddingLeft: 1 }}>
                  {data2.coins}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ fontSize: "10px", fontWeight: 200, lineHeight: 1, opacity: 0.6 }}
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
                    +{data2.salary}
                  </Typography>
                  <IconCoin width={25} height={25} />
                </Box>
              </Box>
            </Box>

            <Divider
              sx={{ color: "#333", backgroundColor: "rgba(0, 143, 109, 0.1)" }}
            />

            <Box
              sx={{
                display: "flex",
                flex: 1,
                borderRadius: "8px",
                backgroundColor: "rgba(27, 46, 55, 0.5)",
                p: "4px",
                gap: 1,
                maxHeight: "33px",
                justifyContent: "space-between",
              }}
            >
              {cardsCategoriesList.map((cat) => (
                <Box
                  key={cat.id}
                  onClick={() => setActiveTab(cat)}
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "8px",
                    borderRadius: "6px",
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: 14,
                    letterSpacing: "0.3px",
                    backgroundColor:
                      cat.id === activeTab.id ? "#008F6E" : "transparent",
                  }}
                >
                  {cat.title}
                </Box>
              ))}

            </Box>

            <CardsList
              onSelectCard={handleShareCard}
              cards={activeTab.id === 1 ? cardsList : myCardsList}
              userCoins={0}
              userSalary={0}
            />
          </Box>
        </Box>
      </Box>

      <CardDetailsModal
        card={selectedCard}
        onClose={handleClearAndCloseModal}
        isView={showShare}
        onClickBuyCard={onClickBuyCard}
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
                        {data2.rating}
                      </Typography>
                    </Box>
                  </Box>
                </Button>
              </Link>
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                alignItems: "center",
              }}
            >
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
                  <img src={ImgStopwatch} style={{ width: 28, height: 28, paddingRight: "5px" }} />
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
              gap: "15px",
              justifyContent: "space-between",
              width: "100%",
              // '@media (max-width: 424px)': {
              //   paddinLeft: "0px",
              // }
            }}
          >
            <Box
              sx={{ zIndex: 50, position: "relative" }}
              onClick={toggleSlider}
            >
              <CustomButton iconPath={teamIcon}>Команда</CustomButton>
            </Box>
            <Box
              sx={{ zIndex: 50, position: "relative" }}
              onClick={() => setDrawerBloggersOpen(!drawerBloggersOpen)}
            >
              <CustomButton iconPath={blogerIcon}>Блогеры</CustomButton>
            </Box>
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

            {/* <Box sx={{ color: 'white' }}>{JSON.stringify(userTelegramId)} {JSON.stringify(data2)} {'GG'}</Box> */}

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
              top: "120%",
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
                // pointerEvents: "none"
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

        <div style={{ padding: '20px' }}>
          <EnergyBar energy={data2.energy} />
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
