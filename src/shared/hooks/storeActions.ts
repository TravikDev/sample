import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useNewDispatch = useDispatch.withTypes<AppDispatch>()
export const useNewSelector = useSelector.withTypes<RootState>()