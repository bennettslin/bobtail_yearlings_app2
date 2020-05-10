import React from 'react'
import cx from 'classnames'

import './style.scss'

const NotFound = () => (
    <div
        {...{
            className: cx(
                'NotFound',
                'Rancho'
            )
        }}
    >
        Page Not Found
    </div>
)

export default NotFound
