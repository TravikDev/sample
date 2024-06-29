import { formatDistanceToNow, parseISO } from "date-fns"

type PropsWithTimestamp = {
  timestamp: string
}

export const TimeAgo = ({ timestamp }: PropsWithTimestamp) => {

  let timeAgo = ''

  if (timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
