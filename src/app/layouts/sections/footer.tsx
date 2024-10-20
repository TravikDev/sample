import { useEffect, useState } from "react"
// import IconCoins from "@/assets/icons/menu/coins.png";
// import IconBoss from "@/assets/icons/menu/boss.png";
// import IconRocket from "@/assets/icons/menu/rocket.png";
// import IconTrophy from "@/assets/icons/menu/trophy.png";
// import { useNewSelector } from "@/shared/hooks/storeActions";
// import { selectProfile } from "@/entities/profile/profileSlice";
import { Link, useLocation } from "react-router-dom"
import { Box, Button, List, Typography } from "@mui/material"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
// import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
// import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
// import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
// import { ReduceCapacityRounded } from "@mui/icons-material";
// import ReduceCapacityRoundedIcon from '@mui/icons-material/ReduceCapacityRounded';
// import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
// import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

import Pick from "@/assets/Pick.png"
import { IconMining } from "@/assets/icons-react/IconMining"
import { IconFriends } from "@/assets/icons-react/IconFriends"
import { IconQuests } from "@/assets/icons-react/IconQuests"
import { IconMap } from "@/assets/icons-react/IconMap"

const listMenu = [
  // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
  {
    id: 1,
    title: "Mining",
    isActive: false,
    url: "/",
    icon: (
      <Button>
        {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
        {/* <EmojiEventsRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '40px', height: '40px' }} /> */}
          <IconMining />
          <Typography
            style={{
              color: "white",
              fontSize: "10px",
              fontFamily: "Inter, sans-serif",
              paddingTop: "3px",
            }}
          >
            Майнинг
          </Typography>
        </Box>
      </Button>
    ),
  },
  {
    id: 2,
    title: "Friends",
    isActive: false,
    url: "/friends",
    icon: (
      <Button>
        {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '40px', height: '40px' }} /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Diversity2RoundedIcon sx={{ color: '#fff', width: '40px', height: '40px' }} /> */}
          <IconFriends />
          <Typography
            style={{
              color: "white",
              fontSize: "10px",
              fontFamily: "Inter, sans-serif",
              paddingTop: "3px",
            }}
          >
            Друзья
          </Typography>
        </Box>
      </Button>
    ),
  },
  {
    id: 3,
    title: "Друзья",
    isActive: false,
    url: "/quests",
    icon: (
      <Button>
        {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
        {/* <EmojiEventsRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '40px', height: '40px' }} /> */}
          <IconQuests />
          <Typography
            style={{
              color: "white",
              fontSize: "10px",
              fontFamily: "Inter, sans-serif",
              paddingTop: "3px",
            }}
          >
            Задания
          </Typography>
        </Box>
      </Button>
    ),
  },
  {
    id: 4,
    title: "Вывод",
    isActive: false,
    url: "/cards",
    icon: (
      <Button>
        {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <InsightsRoundedIcon sx={{ color: '#fff', width: '40px', height: '40px' }} /> */}
          <IconMap />
          <Typography
            style={{
              color: "white",
              fontSize: "10px",
              fontFamily: "Inter, sans-serif",
              paddingTop: "3px",
            }}
          >
            Карта
          </Typography>
        </Box>
      </Button>
    ),
  },
  // {
  //     id: 4,
  //     title: 'Приглашения',
  //     isActive: false,
  //     url: '/referral',
  //     icon: <Button>
  //         {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
  //         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  //         <DiamondRoundedIcon sx={{ color: 'gold', width: '40px', height: '40px' }} />
  //         <Typography style={{ color: 'gold', fontSize: '10px' }}>Алмазы</Typography>
  //         </Box>
  //     </Button>
  // },
]

// type FontAwesomeSvgIconProps = {
//     icon: any;
// };

// const FontAwesomeSvgIcon = forwardRef<SVGSVGElement, FontAwesomeSvgIconProps>(
//     (props, ref) => {
//         const { icon } = props;

//         const {
//             icon: [width, height, , , svgPathData],
//         } = icon;

//         return (
//             <SvgIcon>

//             </SvgIcon>
//         );
//     },
// );

export const Footer = () => {
  const location = useLocation()

  // console.log(window.location.pathname)
  // console.log(location.pathname)

  // const profile = useNewSelector(selectProfile)

  const [user, setUser] = useState<{ id: number; name: string }[]>([
    { id: 123, name: "string" },
  ])

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <footer
      className="main-footer"
      style={{
        width: "100%",
        paddingBlock: 2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        zIndex: 105,
      }}
    >
      {/* {
                user &&
                <p>{user[0].id}: {user[0].name}</p>
            } */}

      {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center', paddingBottom: '12px', paddingTop: '6px' }}>


                <Link to='/'>

                    <Button sx={{
                        backgroundColor: '#131',
                        borderRadius: '10px',
                        border: '2px solid white', // Установка границы
                        color: 'white', // Цвет текста
                        padding: '6px 6px', // Паддинг для лучшего вида 
                        boxShadow: '0px 0px 10px rgba(57, 255, 20, 0.8)',
                        // paddingInline: '20px',
                        // minWidth: '186px'
                    }}>
                        <ChecklistRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />

                    </Button>
                </Link>
            </div> */}
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: 2,
          paddingTop: 1,
        }}
      >
        {listMenu.map((item) => (
          <Link style={{ position: "relative" }} to={item.url} key={item.id}>
            {/* <img height={36} width={36} src={item.icon} alt={item.title} /> */}
            {item.url === window.location.pathname && (
              <img src={Pick} style={{ position: "absolute", top: -20, left: -2 }} />
            )}
            {item.icon}
          </Link>
        ))}
      </List>
    </footer>
  )
}
