import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './style.scss'

const Page = ({
    className,
    children
}) => (
    <div
        {...{
            className: cx(
                'Page',
                'responsive__page',
                className
            )
        }}
    >
        {children}
    </div>
)

Page.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Page
