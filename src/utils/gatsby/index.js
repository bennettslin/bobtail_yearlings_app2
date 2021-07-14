import React from 'react'
import Wrapper from '../../containers/Wrapper'
import Header from '../../containers/Header'
import Main from '../../containers/Main'
import SubFooter from '../../containers/SubFooter'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
    <Wrapper>
        <Header />
        <Main>{element}</Main>
        <SubFooter />
    </Wrapper>
)
