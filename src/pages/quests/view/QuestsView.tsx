import "@/shared/styles/global.scss"
import {
  Avatar,
  Box,
  Typography,
} from "@mui/material"
import IconCoin from "@/assets/icons-react/Coin"
import { useSelector } from "react-redux"
import { QuestsLogo } from "@/assets/icons-react/QuestsLogo"
import { Quest } from "@/features/quests/quests.types"

import IconPr from "@/assets/icons/tasks/Pr.png"
import IconFr from "@/assets/icons/tasks/Fr.png"
import IconYtb from "@/assets/icons/tasks/Ytb.png"
import IconTg from "@/assets/icons/tasks/Tg.png"

import { useEffect, useState } from "react"
import { QuestCompleted } from "@/assets/icons-react/QuestCompleted"
import { QuestArrow } from "@/assets/icons-react/QuestArrow"

// @ts-ignore
const userData = window.Telegram.WebApp.initDataUnsafe;
// const userData = {
//   user: {
//     id: "6646659616",
//     username: 'travikvlad'
//   },
// }

const iconArray = [IconTg, IconYtb, IconFr, IconPr]

const Welcome = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      paddingTop: "45px",
    }}
  >
    <QuestsLogo />
    <span
      style={{
        color: "white",
        fontSize: "32px",
        fontWeight: 700,
        textAlign: "center",
      }}
    >
      Заработай &nbsp; <br />
      <div className="gradient-stroke-text">больше монет!</div>
    </span>
  </Box>
)

const Bonuses = ({ title }: { title: string }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      // paddingTop: '45px'
      // gap: 5,
      // paddingInline: 1,
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        alignItems: "center",
        gap: 8,
      }}
    >
      {/* <Typography sx={{ fontWeight: '700', fontSize: 18, color: '#BAF266' }}>Бонусы</Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: 1,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "600",
            fontSize: 18,
            letterSpacing: "0.8px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  </Box>
)


const QuestsEvents = ({
  setQuests,
  quests,
  title,
}: {
  setQuests: (val: any) => void,
  quests: Quest[]
  title: string
}) => {

  console.log('QUESTS?: ', quests)
  // @ts-ignore
  // const [questsList, setQuestsList] = useState(quests)

  const onClickQuest = async (idTelegram: string, idQuest: number) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/quest/${idTelegram}/${idQuest}`,
        {
          method: 'POST',
        })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const jsonData = await response.json()
      setQuests(jsonData.questsUsersJSON)

    } catch (err) {
    } finally {
    }
  }

  return <>
    <Box sx={{ display: "flex", gap: 1, flexDirection: "column", marginBottom: '8px' }}>
      <Bonuses title={title} />

      {Array.isArray(quests) && quests.length > 0 && quests?.map((quest: Quest, idx: number) => (
        <>
          {
            quest.isCompleted ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "95%",
                }}
              >
                <div
                  style={{ width: "80%", margin: "auto", padding: 1, height: 64 }}
                >
                  <div
                    style={{
                      backgroundColor: quest.isCompleted ? "#0D1D25" : "#182830",
                      borderRadius: 20,
                      height: 64,
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      border: '2px rgba(205, 254, 100, 0.20) solid',
                      borderBottom: 0,
                    }}
                  >
                    <Box
                      sx={{
                        margin: 1,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: "center",
                      }}
                    >
                      <Avatar src={iconArray[idx]} />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{ fontSize: 12, color: "white", fontWeight: 400 }}
                        >
                          {quest.title}
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <IconCoin width={25} height={25} />
                          <Typography sx={{ color: "white" }}>
                            +{quest.salary}
                          </Typography>
                        </Box>
                      </Box>

                      {quest.isCompleted ? <QuestCompleted /> : <QuestArrow />}


                    </Box>
                  </div>
                </div>

              </Box>

            ) : (

              <a onClick={() => onClickQuest(userData.user.id, quest.id)} href={quest.url} target="_blank"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "95%",
                }}>
                <div
                  style={{ width: "80%", margin: "auto", padding: 1, height: 64 }}
                >
                  <div
                    style={{
                      backgroundColor: quest.isCompleted ? "#0D1D25" : "#182830",
                      borderRadius: 20,
                      height: 64,
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      border: '2px rgba(205, 254, 100, 0.20) solid',
                      borderBottom: 0,
                    }}
                  >
                    <Box
                      sx={{
                        margin: 1,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: "center",
                      }}
                    >
                      <Avatar src={iconArray[idx]} />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{ fontSize: 12, color: "white", fontWeight: 400 }}
                        >
                          {quest.title}
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <IconCoin width={25} height={25} />
                          <Typography sx={{ color: "white" }}>
                            +{quest.salary}
                          </Typography>
                        </Box>
                      </Box>

                      {quest.isCompleted ? <QuestCompleted /> : <QuestArrow />}


                    </Box>
                  </div>
                </div>

              </a>
            )
          }
        </>)
      )}
    </Box>
  </>
}

function QuestsView() {
  const friends = useSelector((state: any) => state.quests)
  // const quests = useSelector((state: any) => state.quests)

  // @ts-ignore
  const [quests, setQuests] = useState([])

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users/telegram/${userData.user.id}`)
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const jsonData = await response.json()
        setQuests(jsonData.questsUsersJSON)
        return jsonData
      } catch (err) {
        // setError2(err)
      } finally {
        // setLoading(false)
      }
    }

    getUser()

  }, [])

  console.log("Quests: ", quests)
  console.log("FRIENDS: ", friends)

  return (
    <Box className="main-bg" sx={{ height: '100%', overflowY: 'auto' }}>
      <Welcome />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>

        </Box>

        {Array.isArray(quests) && quests.length > 0 &&
          <QuestsEvents
            quests={quests}
            title="Ежедневные награды"
            setQuests={setQuests}
          />
        }
        {/* <QuestsEvents quests={quests} title="Список заданий" setQuests={setQuests} /> */}
      </Box>
    </Box>
  )
}

export default QuestsView
