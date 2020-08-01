import React from 'react'
import cx from 'classnames'

import './style.scss'

const Footer = () => (
    <div
        {...{
            className: cx(
                'Footer'
            )
        }}
    >
        {`© ${new Date().getFullYear()} Dogies Almondine Records`}
    </div>
)

export default Footer
