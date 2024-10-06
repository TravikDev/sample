// import { useNewSelector } from "@/shared/hooks/storeActions";
// import { selectAllFriends } from "@/entities/friends";
// import { PostAuthor } from "./postAuthor";
// import { TimeAgo } from "@/shared/ui/timeAgo";
// import { ReactionButton } from "@/shared/ui/reactionButton";

import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"

import { IconFriendUser } from "@/assets/icons-react/IconFriendUser"
import IconCoin from "@/assets/icons-react/Coin"
// import { useSelector } from "react-redux"
import GiftBox from "@/assets/giftBox.png"

// @ts-ignore
const userData = window.Telegram.WebApp.initDataUnsafe;

export const FriendsList = () => {

	const [data2, setData2] = useState()

	const [dataIsLoading, setDataIsLoading] = useState(false)
	const [dataIsSuccess, setDataIsSuccess] = useState(false)
	const [dataIsError, setDataIsError] = useState(false)

	const [refsList, setRefsList] = useState([])

	console.log(data2)

	useEffect(() => {

		setDataIsLoading(true)

		const fetchData = async () => {
			try {
				const response = await fetch(`https://paradoxlive.pro/users/getMyRefUsers/${userData.user.id}`)
				if (!response.ok) {
					throw new Error("Network response was not ok")
				}
				const jsonData = await response.json()
				console.log(jsonData)

				setData2(jsonData) // Устанавливаем полученные данные в состояние

				setRefsList(jsonData.referralUsers)

				setDataIsSuccess(true)
			} catch (err) {
				setDataIsError(true) // Устанавливаем ошибку в случае неудачи
			} finally {
				setDataIsLoading(false) // Отключаем индикатор загрузки
			}
		}

		fetchData()

	}, [])

	if (dataIsSuccess) {
		return <>{refsList.map(friend => (
			<>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						width: "100%",
						height: "95%",
					}}
				>
					{/* border: '1px rgba(205, 254, 100, 0.20) solid', borderBottom: '0', borderRadius: 20 */}
					<div
						className="element-border"
						style={{
							width: "80%",
							margin: "auto",
							padding: 1,
							height: 64,
						}}
					>
						<div
							style={{
								backgroundColor: "#021B26",
								borderRadius: 20,
								height: 64,
								display: "flex",
								flexDirection: "row",
								width: "100%",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									margin: 1,
									display: "flex",
									flexDirection: "row",
									gap: 1,
								}}
							>
								<Avatar src={GiftBox} />
								<Box>
									<Typography sx={{ fontSize: 14, color: "white" }}>
										{friend}
									</Typography>
									{/* <img src={IconFriendUser} /> */}
									<Box
										sx={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										<IconFriendUser />
										<Typography sx={{ fontSize: 14, color: "#838D90" }}>
											0
										</Typography>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									position: "absolute",
									right: "10px",
									top: "10px",
									gap: "3px",
								}}
							>
								<Typography sx={{ color: "white" }}>+1000</Typography>
								<IconCoin width={25} height={25} />
							</Box>
						</div>
					</div>
					{/* <div style={{ width: '80%', margin: 'auto', padding: 1, height: 64 }} className='element-border'>
							<div style={{ backgroundColor: '#000', borderRadius: 20, height: 64 }}>ggg</div>
						</div> */}
				</Box>
			</>
		)
		)}</>
	} else if (dataIsLoading) {
		return <>Loading...</>
	} else if (dataIsError) {
		return <>Error</>
	}

}
