import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import {
    BAND_PAGE,
    CONTACT_PAGE,
    ESSAYS_PAGE,
    LINKS_PAGE,
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
        <HeaderButton {...{ pageLink: BAND_PAGE }}>
            Band
        </HeaderButton>
        <HeaderButton {...{ pageLink: ESSAYS_PAGE }}>
            Essays
        </HeaderButton>
        <HeaderButton {...{ pageLink: CONTACT_PAGE }}>
            Contact
        </HeaderButton>
        <HeaderButton {...{ pageLink: LINKS_PAGE }}>
            Links
        </HeaderButton>
    </div>
)

export default Menu
