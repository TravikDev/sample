// import { useGetUserInfoQuery } from "@/entities/api/uspiSlice";
import { useGetUsersQuery } from "@/entities/users/usersSlice";
import { Footer, Header, Main } from "./sections"

type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const BaseLayout = ({ children }: PropsChildrenOnly) => {

    // const { data, error, isSuccess } = useGetUsersQuery()

    // console.log(data, error, isSuccess)

    return (
        <>
            {/* // <div style={{ display: "flex", flexDirection: 'column' }}> */}
            {/* <Header /> */}
            <Main>{children}</Main>
            <Footer />
            {/* // </div> */}
        </>
    )
}
