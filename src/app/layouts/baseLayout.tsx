import { Footer, Header, Main } from "./sections"

type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: PropsChildrenOnly) => {
    return (
        <>
        {/* // <div style={{ display: "flex", flexDirection: 'column' }}> */}
            {/* <Header /> */}
            <Main>{children}</Main>
            {/* <Footer /> */}
        {/* // </div> */}
        </>
    )
}
