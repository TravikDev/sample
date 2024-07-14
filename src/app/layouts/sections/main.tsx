import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import IconCoins from "@/assets/icons/menu/coins.png";
import IconBoss from "@/assets/icons/menu/boss.png";
import IconRocket from "@/assets/icons/menu/rocket.png";
import IconTrophy from "@/assets/icons/menu/trophy.png";
import { useNewSelector } from "@/shared/hooks/storeActions";
import { selectProfile } from "@/entities/profile/profileSlice";
// import { Link } from "react-router-dom";


type PropsChildrenOnly = {
    children: React.ReactNode;
}

const listMenu = [
    // { id: 1, title: 'Главная', isActive: false, url: '/', icon: IconCoins },
    { id: 2, title: 'Главная', isActive: false, url: '/', icon: IconBoss },
    { id: 3, title: 'Вывод', isActive: false, url: '/cards', icon: IconRocket },
    { id: 4, title: 'Приглашения', isActive: false, url: '/referral', icon: IconTrophy }
];


export const Main = ({ children }: PropsChildrenOnly) => {

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
        <main>
            {children}
            
        </main>
    )
}
