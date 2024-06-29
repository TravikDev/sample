import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0,
}

// // Workaround: cast state instead of declaring variable type
// const initialState = {
//     id: 1,
//     name: 'John',
//     count: 0,
//   } satisfies CounterState as CounterState

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }

    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: CounterState) => state.count

export default counterSlice.reducer