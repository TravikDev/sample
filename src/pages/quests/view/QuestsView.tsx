// import GiftBox from "@/assets/giftBox.png"
// import CoinBig from "@/assets/CoinBig.png"
// import IconQuestsCal from "@/assets/Cal.png"

import "@/shared/styles/global.scss"
import {
  Avatar,
  Box,
  // Button,
  Typography,
} from "@mui/material"
// import { IconFriendUser } from "@/assets/icons-react/IconFriendUser"
import IconCoin from "@/assets/icons-react/Coin"
import { useSelector } from "react-redux"
import { QuestsLogo } from "@/assets/icons-react/QuestsLogo"
import { Quest } from "@/features/quests/quests.types"

import IconPr from "@/assets/icons/tasks/Pr.png"
import IconFr from "@/assets/icons/tasks/Fr.png"
import IconYtb from "@/assets/icons/tasks/Ytb.png"
import IconTg from "@/assets/icons/tasks/Tg.png"
// import IconCal from "@/assets/icons/tasks/Cal.png"

import { IconRightArrow } from "@/assets/icons-react/IconRightArrow"

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

// const Banner = () => (
//     <Box sx={{ display: 'flex', padding: 4 }}>
//         <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center', backgroundColor: '#2E195F', width: '100%', borderRadius: '36px', height: 138 }}>
//             <Box>

//                 <img src={GiftBox} width={130} height={130} />
//             </Box>
//             <Box
//                 sx={{ display: 'flex', flexDirection: 'column' }}
//             >
//                 <Box
//                     sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, paddingTop: 2 }}
//                 >
//                     {/* <Typography sx={{ color: 'white', fontWeight: '700', fontSize: 42 }}>+1000</Typography> */}
//                     <span style={{ color: 'white', fontWeight: '700', fontSize: 36, lineHeight: 0.1 }}>+&nbsp;1&nbsp;000</span>
//                     <img src={CoinBig} width={32} height={32} />
//                 </Box>
//                 <Typography sx={{ color: 'white', fontWeight: '300', fontSize: 14, paddingLeft: 1 }}>для тебя и друга</Typography>

//                 <Button sx={{ backgroundColor: '#74E5F2', borderRadius: 15, padding: '1px', marginInline: '1px', width: '70%', marginTop: 1 }}>Получить</Button>

//             </Box>
//         </Box>
//     </Box>
// )

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
        {/* <Typography sx={{ color: '#838D90', fontWeight: '500', fontSize: 14 }}>N друга</Typography> */}
      </Box>
      {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
      {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
    </Box>
  </Box>
)

// const Invites = () => (
//     <Box sx={{
//         display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center',
//         // paddingTop: '45px'
//         // gap: 5,
//         // paddingInline: 1,
//     }}>
//         <Box sx={{
//             display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%', alignItems: 'center', gap: 4
//         }}>
//             <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 1, gap: 2 }}>
//                 {/* <Typography sx={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Ваши друзья</Typography> */}
//                 {/* <Typography sx={{ color: '#838D90', fontWeight: '500', fontSize: 14 }}>N друга</Typography> */}
//                 <Button variant="contained" sx={{ flex: 5, backgroundColor: '#008F6E' }}>Пригласить друга</Button>
//                 <Button variant="contained" sx={{ flex: 1, backgroundColor: '#008F6E' }}>Пригласить друга</Button>
//             </Box>
//             {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
//             {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
//         </Box>
//     </Box>
// )

// const WeeklyEvents = ({ friends, title }: { friends: any, title: string }) => (<>

//     <Box sx={{ display: 'flex', gap: 0, flexDirection: 'column' }}>
//         <Bonuses title={title} />

//         {friends.slice(0, 1).map((friend: any, idx: number) => (
//             <>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '95%' }}>
//                     <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }}
//                     // className='element-border'
//                     >
//                         <div style={{ backgroundColor: '#182830', borderRadius: 20, height: 64, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', }}>
//                             <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>
//                                 <Avatar src={IconQuestsCal} />
//                                 <Box>
//                                     <Typography sx={{ fontSize: 14, color: 'white' }}>{friend.idTelegram}</Typography>
//                                     {/* <img src={IconFriendUser} /> */}
//                                     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//                                         <IconFriendUser />
//                                         <Typography sx={{ fontSize: 14, color: '#838D90' }}>0</Typography>
//                                     </Box>
//                                 </Box>
//                             </Box>

//                             <Box
//                                 sx={{ display: 'flex', flexDirection: 'row' }}
//                             >
//                                 <Typography sx={{ color: 'white' }}>+1000</Typography>
//                                 <IconCoin
//                                     width={25} height={25}
//                                 />
//                             </Box>

//                         </div>
//                     </div>
//                     {/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
//       <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
//     </div> */}
//                 </Box >
//             </>

//         ))}

//         {/* <FriendsList /> */}
//         {/* <PostAdd /> */}
//         {/* <PostsList /> */}
//     </Box>
// </>
// )

const QuestsEvents = ({
  quests,
  title,
}: {
  quests: Quest[]
  title: string
}) => (
  <>
    <Box sx={{ display: "flex", gap: 1, flexDirection: "column", marginBottom: '8px' }}>
      <Bonuses title={title} />

      {quests.map((quest: Quest, idx: number) => (
        <>
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
              // className='element-border'
            >
              <div
                style={{
                  backgroundColor: "#182830",
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
                    alignItems: "center",
                  }}
                >
                  <Avatar src={iconArray[idx]} />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      sx={{ fontSize: 14, color: "white", fontWeight: 400 }}
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
                  <IconRightArrow />

                  {/* <Box>
                                    <img src={IconFriendUser} />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <IconFriendUser />
                                        <Typography sx={{ fontSize: 14, color: '#838D90' }}>0</Typography>
                                    </Box>
                                </Box> */}
                </Box>
              </div>
            </div>
            {/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
      <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
    </div> */}
          </Box>
        </>
      ))}

      {/* <FriendsList /> */}
      {/* <PostAdd /> */}
      {/* <PostsList /> */}
    </Box>
  </>
)

// const QuestsAnotherEvents = ({
//   quests,
//   title,
// }: {
//   quests: Quest[]
//   title: string
// }) => (
//   <>
//     <Box sx={{ display: "flex", gap: 0, flexDirection: "column" }}>
//       <Bonuses title={title} />

//       {quests.map((quest: Quest) => (
//         <>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "100%",
//               height: "95%",
//             }}
//           >
//             <div
//               style={{ width: "80%", margin: "auto", padding: 1, height: 64 }}
//               // className='element-border'
//             >
//               <div
//                 style={{
//                   backgroundColor: "#182830",
//                   borderRadius: 20,
//                   height: 64,
//                   display: "flex",
//                   flexDirection: "row",
//                   width: "100%",
//                   alignItems: "center",
//                   border: '2px rgba(205, 254, 100, 0.20) solid',
//                   borderBottom: 0,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     margin: 1,
//                     display: "flex",
//                     flexDirection: "row",
//                     gap: 1,
//                     alignItems: "center",
//                   }}
//                 >
//                   <Avatar src={IconCal} />
//                   <Box sx={{ display: "flex", flexDirection: "column" }}>
//                     <Typography
//                       sx={{ fontSize: 14, color: "white", fontWeight: 400 }}
//                     >
//                       Забери ежедневную награду!
//                     </Typography>

//                     <Box sx={{ display: "flex", flexDirection: "row" }}>
//                       <IconCoin width={25} height={25} />
//                       <Typography sx={{ color: "white" }}>
//                         +{quest.salary}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <IconRightArrow />
//                   {/* <Box>
//                                     <img src={IconFriendUser} />
//                                     <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
//                                         <IconFriendUser />
//                                         <Typography sx={{ fontSize: 14, color: '#838D90' }}>0</Typography>
//                                     </Box>
//                                 </Box> */}
//                 </Box>
//               </div>
//             </div>
//             {/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
//       <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
//     </div> */}
//           </Box>
//         </>
//       ))}

//       {/* <FriendsList /> */}
//       {/* <PostAdd /> */}
//       {/* <PostsList /> */}
//     </Box>
//   </>
// )

function QuestsView() {
  const friends = useSelector((state: any) => state.quests)
  const quests = useSelector((state: any) => state.quests)

  console.log("Quests: ", quests)
  console.log("FRIENDS: ", friends)
  // The `state` arg is correctly typed as `RootState` already
  // const posts = useNewSelector(selectAllPosts)
  // const dispatch = useNewDispatch()

  // console.log(count[1])

  return (
    <div className="main-bg">
      <Welcome />
      {/* <Banner /> */}
      {/* <Invites /> */}
      {/* <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 'auto' }}>
      <Box
        sx={{ display: 'flex', flex: 5 }}
      >
        <Typography sx={{ color: 'white' }}>gg</Typography>
      </Box>
      <Box
        sx={{ display: 'flex', flex: 1 }}
      >
        <Typography sx={{ color: 'white' }}>gg</Typography>

      </Box>
    </Box> */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
          {/* <Bonuses title={'Ежедневные задания'} />


                {friends.slice(0, 1).map((friend: any) => (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '95%' }}>
                            <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
                                <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', }}>
                                    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>
                                        <Avatar src={IconQuestsCal} />
                                        <Box>
                                            <Typography sx={{ fontSize: 14, color: 'white' }}>{friend.idTelegram}</Typography>
                                            <img src={IconFriendUser} />
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <IconFriendUser />
                                                <Typography sx={{ fontSize: 14, color: '#838D90' }}>0</Typography>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{ display: 'flex', flexDirection: 'row' }}
                                    >
                                        <Typography sx={{ color: 'white' }}>+1000</Typography>
                                        <IconCoin
                                            width={25} height={25}
                                        />
                                    </Box>

                                </div>
                            </div>
                            <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
              <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
            </div>
                        </Box >
                    </>

                ))} */}

          {/* <FriendsList /> */}
          {/* <PostAdd /> */}
          {/* <PostsList /> */}
        </Box>

        {/* {console.log(quests)} */}
        {/* <QuestsAnotherEvents
          quests={quests.slice(-1)}
          title="Ежедневные награды"
        /> */}
        <QuestsEvents quests={quests} title="Список заданий" />
      </Box>
    </div>
  )
}

export default QuestsView
