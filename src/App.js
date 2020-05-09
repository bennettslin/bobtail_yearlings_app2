import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import Fallback from './components/Fallback'
import Header from './components/Header'
import Page from './components/Page'
import Wrapper from './components/Wrapper'

import './style.scss'

const App = () => (
    <Root>
        <Suspense {...{ fallback: Fallback() }} >
            <Wrapper>
                <Header />
                <Page>
                    <Router>
                        <Routes {...{ path: '*' }} />
                    </Router>
                </Page>
            </Wrapper>
        </Suspense>
    </Root>
)

export default App