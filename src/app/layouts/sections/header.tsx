import { useEffect, useState } from "react";



export const Header = () => {

    const [user, setUser] = useState<[{ id: number, name: string }]>([{ id: 123, name: "string" }]);

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {
                user &&
                <h1>{user[0].id}: {user[0].name}</h1>
            }
        </div>
    );
}
