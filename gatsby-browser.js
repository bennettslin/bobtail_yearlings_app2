import React from 'react'
import Content from './src/containers/Content'
import Footer from './src/containers/Footer'
import Header from './src/containers/Header'
import Wrapper from './src/containers/Wrapper'

import './src/scss/style'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <Wrapper>
        <Header />
        <Content>
            {element}
        </Content>
        <Footer />
    </Wrapper>
)
