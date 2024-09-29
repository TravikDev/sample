// import TelegramLogin from "@/widgets/auth/TelegramLogin";
import { Footer, Main } from "./sections"
// import TelegramLoginComponent from "@/widgets/auth/TelegramLogin";

type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: PropsChildrenOnly) => {

    return (
        <>
            {/* <TelegramLoginComponent /> */}
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
