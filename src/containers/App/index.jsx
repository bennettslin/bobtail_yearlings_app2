import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import BrowserNavManager from '../../managers/BrowserNav'
import Wrapper from '../Wrapper'
import AppFooter from './Footer'
import './style'

const App = ({ children }) => (
    <div
        {...{
            className: cx(
                'App',
                'font__text',
            ),
        }}
    >
        <BrowserNavManager />
        <Wrapper>{children}</Wrapper>
        <AppFooter />
    </div>
)

App.propTypes = {
    children: PropTypes.node.isRequired,
}

export default App
