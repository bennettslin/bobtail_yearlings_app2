import React from 'react'
import cx from 'classnames'
import MenuButton from './MenuButton'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <MenuButton>Band</MenuButton>
        <MenuButton>Shows</MenuButton>
        <MenuButton>Essays</MenuButton>
        <MenuButton>Contact</MenuButton>
    </div>
)

export default Menu
