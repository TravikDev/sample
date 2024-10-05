// import { selectAllPosts } from "@/entities/posts"
// import { useNewSelector } from "@/shared/hooks/storeActions"
// import type { PostsState } from "@/entities/posts"
// import { PostAdd } from "@/features/posts/postAdd"
// import { PostsList } from "@/features/posts"
// import { FriendsList } from "@/features/friends"
import GiftBox from "@/assets/giftBox.png"
import CoinBig from "@/assets/CoinBig.png"

import "@/shared/styles/global.scss"
import { Avatar, Box, Button, Typography } from "@mui/material"
import { IconFriendUser } from "@/assets/icons-react/IconFriendUser"
import IconCoin from "@/assets/icons-react/Coin"
import { useSelector } from "react-redux"
import { IconInvite } from "@/assets/icons-react/IconInvite"
import { useModal } from "@/shared/ui/DetailsModal"
import { InviteModal } from "@/shared/ui/InviteModal"

const Welcome = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      paddingTop: "45px",
      gap: "7px",
    }}
  >
    <span style={{ color: "white", fontSize: "32px", fontWeight: 700 }}>
      Приглашай &nbsp;
      <div className="gradient-stroke-text">друзей</div>
    </span>
    <span style={{ color: "white", fontSize: "14px", letterSpacing: "0.5px" }}>
      и получайте бонусы вместе!
    </span>
  </Box>
)

const Banner = () => { 
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
  <Box sx={{ display: "flex", padding: "32px 32px 0 32px" }}>
    <Box
      sx={{
        backgroundColor: "#492799",
        width: "100%",
        borderRadius: "36px",
        border: "1px rgba(205, 254, 100, 0.20) solid",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "36px",
          gap: 4,
          justifyContent: "center",
          height: 138,
          background:
            "radial-gradient(54.12% 52.31% at 24.95% 62.58%, #8BF5ED -100%, rgba(61.45, 215.85, 221.18, 0.65) 30%, rgba(24.60, 48.40, 79.53, 0) 100%)",
        }}
      >
        <Box>
          <img src={GiftBox} width={130} height={130} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              paddingTop: 2,
            }}
          >
            {/* <Typography sx={{ color: 'white', fontWeight: '700', fontSize: 42 }}>+1000</Typography> */}
            <span
              style={{
                color: "white",
                fontWeight: "700",
                fontSize: 32,
                lineHeight: 0.1,
                opacity: 0.9,
              }}
            >
              +&nbsp;1&nbsp;000
            </span>
            <img src={CoinBig} width={32} height={32} />
          </Box>
          <Typography
            sx={{
              color: "white",
              opacity: 0.7,
              fontWeight: "300",
              fontSize: 14,
              paddingLeft: 1,
              letterSpacing: ".7px",
            }}
          >
            для тебя и друга
          </Typography>
          <Button
          onClick={handleOpen}
            sx={{
              backgroundColor: "#008f6e",
              color: "#fff",
              fontWeight: "600",
              textTransform: "capitalize",
              borderRadius: 15,
              padding: "5px",
              marginInline: "1px",
              width: "90%",
              marginTop: 1.4,
              fontSize: 16,
            }}
          >
            Получить
          </Button>
        </Box>
      </Box>
    </Box>
    {isOpen && <InviteModal onClose={handleClose} isView={isOpen}/>}
  </Box>
) }

const Bonuses = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      paddingTop: "25px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "80%",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: 18,
          color: "#BAF266",
          paddingBottom: "10px",
        }}
      >
        Бонусы
      </Typography>
      {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
      {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
    </Box>
  </Box>
)

const Invites = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

   return (
  <Box
    className="main-bg"
    sx={{
      padding: "0px 0 10px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      position: "fixed",
      bottom: "80px",
      zIndex: 1,
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
        gap: 4,

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: 1,
          gap: 1.5,
        }}
      >
        {/* <Typography sx={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Ваши друзья</Typography> */}
        {/* <Typography sx={{ color: '#838D90', fontWeight: '500', fontSize: 14 }}>N друга</Typography> */}
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            fontSize: "18px",
            padding: "12px",
            borderRadius: "16px",
            width: "95%",
            backgroundColor: "#008F6E",
            textTransform: "none",
            letterSpacing: "1px",
          }}
        >
          Пригласить друга
        </Button>
        
        <Button
          variant="contained"
          sx={{ width: "5%", borderRadius: "16px", backgroundColor: "#008F6E" }}
        >
          <IconInvite />
        </Button>
      </Box>
      {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
      {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
    </Box>
    {isOpen && <InviteModal onClose={handleClose} isView={isOpen}/>}
  </Box>
)
}



function FriendsView() {
  const friends = useSelector((state: any) => state.friends)

  console.log("FRIENDS: ", friends)

  // The `state` arg is correctly typed as `RootState` already
  // const posts = useNewSelector(selectAllPosts)
  // const dispatch = useNewDispatch()

  // console.log(count[1])

  return (
    <div className="main-bg">
      <Welcome />
      <Banner />

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
      <Bonuses />
      <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "50px",
            width: "100%",
            "@media (min-width: 530px)": { gap: "100px" },
            "@media (min-width: 700px)": { gap: "220px" },
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "500", fontSize: 18, letterSpacing: '0.5px', }}>
            Ваши друзья
          </Typography>
          <Typography
            sx={{ color: "#838D90", fontWeight: "500", fontSize: 14 }}
          >
            N друга
          </Typography>
        </Box>
        <Box
          sx={{
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "10px", 
            // TODO: сделать нефиксированную высоту для списка друзей
            minHeight: "450px",
            '@media (min-width: 740px)': { 
              minHeight: '630px'
             },
             '@media (min-width: 910px)': { 
              minHeight: '850px'
             },
          }}
        >
          {friends.map((friend: any) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "95%",
                }}
              >
                {/* border: '1px rgba(205, 254, 100, 0.20) solid', borderBottom: '0', borderRadius: 20 */}
                <div
                  className="element-border"
                  style={{
                    width: "80%",
                    margin: "auto",
                    padding: 1,
                    height: 64,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#021B26",
                      borderRadius: 20,
                      height: 64,
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        margin: 1,
                        display: "flex",
                        flexDirection: "row",
                        gap: 1,
                      }}
                    >
                      <Avatar src={GiftBox} />
                      <Box>
                        <Typography sx={{ fontSize: 14, color: "white" }}>
                          {friend.idTelegram}
                        </Typography>
                        {/* <img src={IconFriendUser} /> */}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <IconFriendUser />
                          <Typography sx={{ fontSize: 14, color: "#838D90" }}>
                            0
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        gap: "3px",
                      }}
                    >
                      <Typography sx={{ color: "white" }}>+1000</Typography>
                      <IconCoin width={25} height={25} />
                    </Box>
                  </div>
                </div>
                {/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
                  <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
                </div> */}
              </Box>
            </>
          ))}
        </Box>
        {/* <FriendsList /> */}
        {/* <PostAdd /> */}
        {/* <PostsList /> */}
      </Box>
      <Invites />
    </div>
  )
}

export default FriendsView
