import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Router } from 'components/Router'

import './app.scss'

export default () => (
    <Root>
        <Suspense
            {...{
                fallback: (
                    <em>Loading...</em>
                )
            }}
        >
            <Router>
                <Routes
                    {...{
                        path: '*'
                    }}
                />
            </Router>
        </Suspense>
    </Root>
)