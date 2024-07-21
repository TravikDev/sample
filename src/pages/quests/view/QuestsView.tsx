import { Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Stack, Typography } from "@mui/material"

const questsList = [
    {
        id: 1,
        content: 'Collect a '
    },
    {
        id: 2,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    },
    {
        id: 3,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    },
    {
        id: 4,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    },
    {
        id: 5,
        content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

    },
]

export const QuestsView = () => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'column', paddingInline: '24px', gap: '24px' }}>
            {questsList.map((item) =>
                <Card sx={{ width: '100%', height: '100%' }}>
                    {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                /> */}
                    <CardContent>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Checkbox
                                // {...label}
                                defaultChecked
                                sx={{
                                    color: 'green',
                                    '&.Mui-checked': {
                                      color: 'green',
                                    },
                                    '& .MuiSvgIcon-root': {
                                      fontSize: 28,
                                    },
                                    padding: 0,
                                    paddingRight: 2,
                                  }}
                            />
                            {/* <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography> */}
                            <Typography variant="body2" color="text.secondary" sx={{ paddingBlock: '4px' }}>
                                {item.content}
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button sx={{ color: 'green' }} size="small">Share</Button>
                        <Button sx={{ color: 'green' }} size="small">Learn More</Button>
                    </CardActions>
                </Card>
            )}
        </Stack>
    )
}
