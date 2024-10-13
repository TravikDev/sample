// import TelegramLogin from "@/widgets/auth/TelegramLogin";
import { Footer, Main } from "./sections"
// import TelegramLoginComponent from "@/widgets/auth/TelegramLogin";

type PropsChildrenOnly = {
    children: React.ReactNode;
}

// @ts-ignore
const platform = window?.Telegram.WebApp.platform
export const BaseLayout = ({ children }: PropsChildrenOnly) => {
    if (platform === 'ios' || platform === 'android') {
        return <>
            {/* <TelegramLoginComponent /> */}
            <Main>{children}</Main>
            <Footer />
        </>
    } else {
        <div><p style={{ color: 'white' }}>Игра доступна только для ios или android!</p></div>
    }
}
