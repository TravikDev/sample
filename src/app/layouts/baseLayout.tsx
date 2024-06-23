import { Footer, Header, Main } from "./sections"

type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: PropsChildrenOnly) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
