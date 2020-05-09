import React from 'react'
import cx from 'classnames'

const Fallback = () => (
    <div
        {...{
            className: cx(
                'Fallback'
            )
        }}
    >
        Fallback
    </div>
)

export default Fallback