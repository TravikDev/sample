// import TelegramLogin from "@/widgets/auth/TelegramLogin";
import { Footer, Main } from "./sections"
// import TelegramLoginComponent from "@/widgets/auth/TelegramLogin";

type PropsChildrenOnly = {
    children: React.ReactNode;
}

// @ts-ignore
const platform = window?.Telegram.WebApp.platform

export const BaseLayout = ({ children }: PropsChildrenOnly) => {

    return (
        <>
            {/* <TelegramLoginComponent /> */}
            <Main>{platform === 'ios' || platform === 'android' ? children : <div>Игра доступна только для ios или android!</div>}</Main>
            <Footer />
        </>
    )
}
