import React, { useState } from 'react'
import { useEffect } from 'react'
import style from './Counter.module.css'

function Counter({ delay }) {
    const [counter, setCounter] = useState(0)
    const [timerActive, setTimerActive] = useState(true)

    useEffect(() => {
        if (delay === null) return

        // Запустить таймер
        const timer = setTimeout(() => {
            setCounter(counter + 1)
        }, delay)

        // Остановить таймер
        if (!timerActive) {
            clearTimeout(timer)
        }

        return () => clearTimeout(timer)
    }, [delay, counter, timerActive])

    const handleTimerControl = () => {
        setTimerActive((prevState) => !prevState)
    }

    return (
        <div className={style.counter}>
            <h1>{counter}</h1>
            <button onClick={() => handleTimerControl()}>Остановить/Запустить</button>
        </div>
    )
}

export default Counter
