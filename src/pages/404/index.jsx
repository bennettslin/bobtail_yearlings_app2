import React from 'react'
import cx from 'classnames'
import './style'

const NotFound = () => (
    <div
        {...{
            className: cx(
                'NotFound',
                'Rancho'
            ),
        }}
    >
        Page Not Found
    </div>
)

export default NotFound
