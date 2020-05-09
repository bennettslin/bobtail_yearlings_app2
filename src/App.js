import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import Fallback from './components/Fallback'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'

import './scss/style.scss'

const App = () => (
    <Root>
        <Suspense {...{ fallback: Fallback() }} >
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

export default App
