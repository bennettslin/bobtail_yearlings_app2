import React from 'react'
import cx from 'classnames'
import Button from '../../../components/Button'
import Svg from '../../../components/Svg'
import logo from '../../../assets/svgs/logo.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const LogoButton = () => (
    <Button
        {...{
            className: cx(
                'LogoButton',
            ),
            gaLabel: 'LogoButton',
            pageLink: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: logo,
            }}
        />
    </Button>
)

export default LogoButton
