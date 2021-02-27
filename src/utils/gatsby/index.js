import React from 'react'
import Content from '../../containers/Content'
import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import Wrapper from '../../containers/Wrapper'

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
