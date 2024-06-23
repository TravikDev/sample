import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'



export const Counter = () => {

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    /* @ts-ignore */
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={resetAll}>0</button>
            </div>
            <input
                type='text'
                value={incrementAmount}
                /* @ts-ignore */
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            </div>
        </section>
    )
}
