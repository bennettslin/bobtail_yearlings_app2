import React from 'react'
import Content from './src/containers/Content'
import Header from './src/containers/Header'
import Wrapper from './src/containers/Wrapper'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <Wrapper>
        <Header />
        <Content>
            {element}
        </Content>
    </Wrapper>
)
