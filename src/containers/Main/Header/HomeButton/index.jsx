import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import LogoSvg from '../../../../components/Svgs/Logo'
import logo from '../../../../assets/svgs/app/logo'
import { HOME_PAGE } from '../../../../constants/pages'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pagePath: HOME_PAGE,
        }}
    >
        <LogoSvg
            {...{
                src: logo,
                scaleFactor: 0.075,
            }}
        />
    </HeaderButton>
)

export default HomeButton
