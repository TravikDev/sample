import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useNewDispatch = useDispatch.withTypes<AppDispatch>()
// export const useNewSelector = useSelector.withTypes<RootState>()