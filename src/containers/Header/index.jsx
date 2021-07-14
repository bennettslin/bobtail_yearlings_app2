import React from 'react'
import cx from 'classnames'
import Logo from './Logo'
import './style.scss'

const Header = () => (
    <div
        {...{
            className: cx(
                'Header',
                'responsive__header'
            ),
        }}
    >
        <Logo />
    </div>
)

export default Header
