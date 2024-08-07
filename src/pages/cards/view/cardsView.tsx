import { useHelmet } from "@/shared/hooks/useHelmet"

const listCards = [
    {
        id: '1',
        title: 'Title 1',
        content: 'Content 1',
    },
    {
        id: '2',
        title: 'Title 2',
        content: 'Content 2',
    },
    {
        id: '3',
        title: 'Title 3',
        content: 'Content 3',
    },
    // {
    //     id: '4',
    //     title: 'Title 3',
    //     content: 'Content 3',
    // },
    // {
    //     id: '5',
    //     title: 'Title 3',
    //     content: 'Content 3',
    // },
]

function CardsView() {
    const helmet = useHelmet({ title: 'Title', description: 'Description', keywords: 'keywords' })

    return (
        <>
            {helmet}

            <div className="container" style={{ padding: '24px', display: 'flex', gap: '24px', flexDirection: 'column' }}>
                {listCards.map((item) =>
                    <div
                        key={item.id}
                    style={{
                        width: '100%',
                        // overflow: 'scroll',
                        color: 'white',
                        borderRadius: '12px',
                        borderColor: '#fff',
                        borderWidth: '2px',
                        borderStyle: 'double',
                        // backgroundColor: 'whitesmoke',
                        padding: '5px',
                        height: '128px'
                    }}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CardsView