import { Footer, Main } from "./sections"

type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: PropsChildrenOnly) => {

    return (
        <>
            <Main>{children}</Main>
            <Footer />
        </>
    )
}
