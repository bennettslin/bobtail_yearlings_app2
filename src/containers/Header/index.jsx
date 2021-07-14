import React from 'react'
import cx from 'classnames'
import Logo from './LogoButton'
import './style'

const Header = () => (
    <div
        {...{
            className: cx(
                'Header',
            ),
        }}
    >
        <Logo />
        <Logo />
    </div>
)

export default Header
