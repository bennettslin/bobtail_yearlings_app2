import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import Fallback from './components/Fallback'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

import sendEvent from './utils/analytics'

import './scss/style.scss'

const App = () => {

    sendEvent({
        category: 'lifecycle',
        action: 'mount',
        label: 'App'
    })

    return (
        <Root>
            <Suspense {...{ fallback: Fallback() }}>
                <Wrapper>
                    <Header />
                    <Content>
                        <Router>
                            <Routes {...{ path: '*' }} />
                        </Router>
                    </Content>
                    <Footer />
                </Wrapper>
            </Suspense>
        </Root>
    )
}

export default App
