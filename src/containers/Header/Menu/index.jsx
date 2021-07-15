import React from 'react'
import cx from 'classnames'
import MenuButton from './MenuButton'
import {
    BAND_PAGE,
    CONTACT_PAGE,
    ESSAYS_PAGE,
    getPathForPage,
    SHOWS_PAGE,
} from '../../../constants/pages'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <MenuButton {...{ to: getPathForPage(BAND_PAGE) }}>
            Band
        </MenuButton>
        <MenuButton {...{ to: getPathForPage(SHOWS_PAGE) }}>
            Shows
        </MenuButton>
        <MenuButton {...{ to: getPathForPage(ESSAYS_PAGE) }}>
            Essays
        </MenuButton>
        <MenuButton {...{ to: getPathForPage(CONTACT_PAGE) }}>
            Contact
        </MenuButton>
    </div>
)

export default Menu
