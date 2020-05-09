import React from 'react'
import cx from 'classnames'

import './style.scss'

const NotFound = () => (
    <div
        {...{
            className: cx(
                'NotFound'
            )
        }}
    >
        404 page
    </div>
)

export default NotFound
