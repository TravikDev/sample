type PropsChildrenOnly = {
    children: React.ReactNode;
}

export const Main = ({ children }: PropsChildrenOnly) => {
    return (
        <main>
            {children}
        </main>
    )
}
