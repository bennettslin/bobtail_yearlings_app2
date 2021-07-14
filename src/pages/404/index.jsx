import React from 'react'
import cx from 'classnames'
import Heading from '../../components/Heading'

const NotFound = () => (
    <div
        {...{
            className: cx(
                'NotFound',
            ),
        }}
    >
        <Heading>Page Not Found</Heading>
    </div>
)

export default NotFound
