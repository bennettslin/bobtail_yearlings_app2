import React from 'react'
import cx from 'classnames'
import Svg from '../../../modules/Svg'
import logo from '../../../assets/svgs/logo.svg'
import Button from '../../../components/Button'
import './style'

const LogoButton = () => (
    <Button
        {...{
            className: cx(
                'LogoButton',
            ),
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
