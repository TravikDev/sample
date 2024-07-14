import { forwardRef, useEffect, useState } from "react";
import IconCoins from "@/assets/icons/menu/coins.png";
import IconBoss from "@/assets/icons/menu/boss.png";
import IconRocket from "@/assets/icons/menu/rocket.png";
import IconTrophy from "@/assets/icons/menu/trophy.png";
import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectProfile } from "@/entities/profile/profileSlice";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, Stack, SvgIcon, Typography } from "@mui/material";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
// import { ReduceCapacityRounded } from "@mui/icons-material";
import ReduceCapacityRoundedIcon from '@mui/icons-material/ReduceCapacityRounded';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';

const listMenu = [
    // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
    {
        id: 1, title: 'Главная', isActive: false, url: '/', icon:
            <Button >
                {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
                {/* <EmojiEventsRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />  */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
            <Typography style={{ color: 'white', fontSize: '10px' }}>Boost</Typography>
            </Box>
            </Button>
    },
    {
        id: 2, title: 'Вывод', isActive: false, url: '/cards', icon:
            <Button >
                {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <InsightsRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
            <Typography style={{ color: 'white', fontSize: '10px' }}>Stats</Typography>
            </Box>
            </Button>
    },
    {
        id: 3,
        title: 'Приглашения',
        isActive: false,
        url: '/referral',
        icon: <Button>
            {/* <RocketLaunchRoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} /> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Diversity2RoundedIcon sx={{ color: '#fff', width: '48px', height: '48px' }} />
            <Typography style={{ color: 'white', fontSize: '10px' }}>Referral</Typography>
            </Box>
        </Button>
    },
    {
        id: 4,
        title: 'Приглашения',
        isActive: false,
        url: '/referral',
        icon: <Button>
            {/* <Typography style={{ color: 'white', fontSize: '24px' }}>Quests</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <DiamondRoundedIcon sx={{ color: 'gold', width: '48px', height: '48px' }} />
            <Typography style={{ color: 'gold', fontSize: '10px' }}>Diamonds</Typography>
            </Box>
        </Button>
    },
];

type FontAwesomeSvgIconProps = {
    icon: any;
};

const FontAwesomeSvgIcon = forwardRef<SVGSVGElement, FontAwesomeSvgIconProps>(
    (props, ref) => {
        const { icon } = props;

        const {
            icon: [width, height, , , svgPathData],
        } = icon;

        return (
            <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
                {typeof svgPathData === 'string' ? (
                    <path d={svgPathData} />
                ) : (
                    /**
                     * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
                     * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
                     * of a duotone icon. 40% is the default opacity.
                     *
                     * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
                     */
                    svgPathData.map((d: string, i: number) => (
                        <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
                    ))
                )}
            </SvgIcon>
        );
    },
);


export const Footer = () => {

    const profile = useNewSelector(selectProfile)

    const [user, setUser] = useState<{ id: number, name: string }[]>([{ id: 123, name: "string" }]);

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <footer style={{ padding: '2px', paddingBottom: '12px', paddingInline: '12px' }}>
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
            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: '36px', justifyContent: 'space-evenly', width: '100%', paddingTop: '8px', paddingBottom: '8px' }}>
                {listMenu.map((item) => (
                    <Link style={{}} to={item.url} key={item.id}>
                        {/* <img height={36} width={36} src={item.icon} alt={item.title} /> */}
                        {item.icon}
                    </Link>
                ))}
            </Stack>

        </footer>
    );
};
