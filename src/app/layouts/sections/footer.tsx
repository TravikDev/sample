import { useEffect, useState } from "react";
import IconCoins from "@/assets/icons/menu/coins.png";
import IconBoss from "@/assets/icons/menu/boss.png";
import IconRocket from "@/assets/icons/menu/rocket.png";
import IconTrophy from "@/assets/icons/menu/trophy.png";
import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectProfile } from "@/entities/profile/profileSlice";
import { Link } from "react-router-dom";

const listMenu = [
    // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
    { id: 2, title: 'Главная', isActive: false, url: '/', icon: IconBoss },
    { id: 3, title: 'Вывод', isActive: false, url: '/cards', icon: IconRocket },
    { id: 4, title: 'Приглашения', isActive: false, url: '/referral', icon: IconTrophy }
];

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
        <div className="footer">
            {/* {
                user &&
                <p>{user[0].id}: {user[0].name}</p>
            } */}

            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', alignItems: 'center' }}>
                <Link to='/'>
                    <img height={36} width={36} src={IconCoins} alt='coins' />
                </Link>
                <p style={{ fontStyle: 'normal', color: 'gold', fontSize: 36 }}>{profile.clicks}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', gap: '36px' }}>
                {listMenu.map((item) => (
                    <Link style={{}} to={item.url} key={item.id}>
                        <img height={36} width={36} src={item.icon} alt={item.title} />
                    </Link>
                ))}
            </div>

        </div>
    );
};
