import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const timerId = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(timerId);
    }

    const stop = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }
    let formatterTime = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"});

    let formatterDate = new Intl.DateTimeFormat("ru");

    const stringTime = formatterTime.format(date) || <br/>
    const stringDate = formatterDate.format(date) || <br/> 
    let formatterDay = new Intl.DateTimeFormat("en-US", { weekday: "long"});
    let formatterMonth = new Intl.DateTimeFormat("en-US", {
        month: "long",
    });
    const stringDay = formatterDay.format(date) || <br/>
    const stringMonth = formatterMonth.format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId}
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock