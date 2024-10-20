// import { selectAllPosts } from "@/entities/posts"
// import { useNewSelector } from "@/shared/hooks/storeActions"
// import type { PostsState } from "@/entities/posts"
// import { PostAdd } from "@/features/posts/postAdd"
// import { PostsList } from "@/features/posts"
// import { FriendsList } from "@/features/friends"
import GiftBox from "@/assets/giftBox.png"
import CoinBig from "@/assets/CoinBig.png"

import "@/shared/styles/global.scss"
import { Box, Button, Typography } from "@mui/material"
// import { IconFriendUser } from "@/assets/icons-react/IconFriendUser"
// import IconCoin from "@/assets/icons-react/Coin"
// import { useSelector } from "react-redux"
import { IconInvite } from "@/assets/icons-react/IconInvite"
import { useModal } from "@/shared/ui/DetailsModal"
import { InviteModal } from "@/shared/ui/InviteModal"
import { FriendsList } from "@/features/friends"

// @ts-ignore
const userData = window.Telegram.WebApp.initDataUnsafe;


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
      {isOpen && <InviteModal onClose={handleClose} isView={isOpen} />}
    </Box>
  )
}

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

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://t.me/LiveParadox_Bot/paradox?startapp=${userData.user.id}`)
      .then(() => {
        alert("Текст скопирован!");
      })
      .catch((error) => {
        console.error("Ошибка при копировании: ", error);
      });
  };

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
            onClick={() => handleCopy()}
          >
            <IconInvite />
          </Button>
        </Box>
        {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
        {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
      </Box>
      {isOpen && <InviteModal onClose={handleClose} isView={isOpen} />}
    </Box>
  )
}



function FriendsView() {
  // const friends = useSelector((state: any) => state.friends)

  // console.log("FRIENDS: ", friends)

  // The `state` arg is correctly typed as `RootState` already
  // const posts = useNewSelector(selectAllPosts)
  // const dispatch = useNewDispatch()

  // console.log(count[1])

  return (
    <Box className="main-bg" sx={{ height: '100%', overflowY: 'auto' }}>
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
      <Box sx={{ display: "flex", gap: 1, flexDirection: "column", flex: 1, flexGrow: 1 }}>


        <FriendsList />
        {/* <PostAdd /> */}
        {/* <PostsList /> */}
      </Box>
      <Invites />
    </Box>
  )
}

export default FriendsView
