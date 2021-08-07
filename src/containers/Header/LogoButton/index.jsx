import React from 'react'
// import cx from 'classnames'
// import Button from '../../../components/Button'
import MenuButton from '../Menu/MenuButton'
import Svg from '../../../components/Svg'
import bobtailYearlings from '../../../assets/svgs/bobtailYearlings.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const LogoButton = () => (
    <MenuButton
        {...{
            // className: cx(
            //     'LogoButton',
            // ),
            // gaLabel: 'LogoButton',
            pageLink: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: bobtailYearlings,
            }}
        />
    </MenuButton>
)

export default LogoButton
