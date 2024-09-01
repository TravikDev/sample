// import { selectAllPosts } from "@/entities/posts"
// import { useNewSelector } from "@/shared/hooks/storeActions"
// import type { PostsState } from "@/entities/posts"
// import { PostAdd } from "@/features/posts/postAdd"
// import { PostsList } from "@/features/posts"
// import { FriendsList } from "@/features/friends"
import GiftBox from "@/assets/giftBox.png"
import CoinBig from "@/assets/CoinBig.png"

import '@/shared/styles/global.scss'
import { Avatar, Box, Button, Typography } from "@mui/material"
import { IconFriendUser } from "@/assets/icons-react/IconFriendUser"
import IconCoin from "@/assets/icons-react/Coin"
import { useSelector } from "react-redux"
import { IconInvite } from "@/assets/icons-react/IconInvite"



const Welcome = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center', paddingTop: '45px' }}>
    <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Приглашай &nbsp;
      <div className="gradient-stroke-text">друзей</div>
    </span>
    <span style={{ color: 'white' }}>и получайте бонусы вместе!</span>
  </Box>
)


const Banner = () => (
  <Box sx={{ display: 'flex', padding: 4 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, justifyContent: 'center', backgroundColor: '#2E195F', width: '100%', borderRadius: '36px', height: 138 }}>
      <Box>

        <img src={GiftBox} width={130} height={130} />
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1, paddingTop: 2 }}
        >
          {/* <Typography sx={{ color: 'white', fontWeight: '700', fontSize: 42 }}>+1000</Typography> */}
          <span style={{ color: 'white', fontWeight: '700', fontSize: 36, lineHeight: 0.1 }}>+&nbsp;1&nbsp;000</span>
          <img src={CoinBig} width={32} height={32} />
        </Box>
        <Typography sx={{ color: 'white', fontWeight: '300', fontSize: 14, paddingLeft: 1 }}>для тебя и друга</Typography>

        <Button sx={{ backgroundColor: '#74E5F2', borderRadius: 15, padding: '1px', marginInline: '1px', width: '70%', marginTop: 1 }}>Получить</Button>

      </Box>
    </Box>
  </Box>
)

const Bonuses = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center',
    // paddingTop: '45px'
    // gap: 5,
    // paddingInline: 1,
  }}>
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%', alignItems: 'center', gap: 4
    }}>
      <Typography sx={{ fontWeight: '700', fontSize: 18, color: '#BAF266' }}>Бонусы</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 1 }}>
        <Typography sx={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Ваши друзья</Typography>
        <Typography sx={{ color: '#838D90', fontWeight: '500', fontSize: 14 }}>N друга</Typography>
      </Box>
      {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
      {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
    </Box>
  </Box>
)

const Invites = () => (
  <Box sx={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center',
    // paddingTop: '45px'
    // gap: 5,
    // paddingInline: 1,
  }}>
    <Box sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80%', alignItems: 'center', gap: 4
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 1, gap: 2 }}>
        {/* <Typography sx={{ color: 'white', fontWeight: '500', fontSize: 18 }}>Ваши друзья</Typography> */}
        {/* <Typography sx={{ color: '#838D90', fontWeight: '500', fontSize: 14 }}>N друга</Typography> */}
        <Button variant="contained" sx={{ width: '95%', backgroundColor: '#008F6E' }}>Пригласить друга</Button>
        <Button variant="contained" sx={{ width: '5%', backgroundColor: '#008F6E' }}>
          <IconInvite />
        </Button>
      </Box>
      {/* <span style={{ color: 'white', fontSize: '32px', fontWeight: 700 }}>Бонусы</span> */}
      {/* <span style={{ color: 'white' }}>и получайте бонусы вместе!</span> */}
    </Box>
  </Box>
)


function FriendsView() {

  const friends = useSelector((state: any) => state.friends)

  console.log('FRIENDS: ', friends)
  // The `state` arg is correctly typed as `RootState` already
  // const posts = useNewSelector(selectAllPosts)
  // const dispatch = useNewDispatch()

  // console.log(count[1])

  return (<>
    <Welcome />
    <Banner />
    <Invites />
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

    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>

      {friends.map((friend: any) => (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '95%' }}>
            <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
              <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', }}>
                <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', gap: 1 }}>
                  <Avatar src={GiftBox} />
                  <Box>
                    <Typography sx={{ fontSize: 14, color: 'white' }}>{friend.idTelegram}</Typography>
                    {/* <img src={IconFriendUser} /> */}
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
            {/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
              <div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
            </div> */}
          </Box >
        </>

      ))}



      {/* <FriendsList /> */}
      {/* <PostAdd /> */}
      {/* <PostsList /> */}
    </Box>
  </>)
}

export default FriendsView;