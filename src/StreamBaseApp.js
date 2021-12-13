import React, { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { RegisterAdvice } from './components/RegisterAdvice'


import './styles/StreamBaseApp/StreamBaseApp.scss'

export const StreamBaseApp = () => {

    const [streamSelected, setStreamSelected] = useState(false);

    return (
        <div className="wrapper">
            <Header streamSelected={streamSelected} setStreamSelected={setStreamSelected} />
            <Main streamSelected={streamSelected} setStreamSelected={setStreamSelected} />
            {
                !streamSelected  && <RegisterAdvice />
            }
        </div>
    )
}
