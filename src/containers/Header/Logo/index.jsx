import React from 'react'
import cx from 'classnames'

import Svg from '../../../modules/Svg'
import logo from '../../../assets/svgs/logo.svg'

import './style.scss'

const Logo = () => (
    <div
        {...{
            className: cx(
                'Logo',
                'responsive__headerChild'
            ),
        }}
    >
        <Svg
            {...{
                src: logo,
            }}
        />
    </div>
)

export default Logo
