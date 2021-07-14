import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Page = ({
    className,
    children,
}) => (
    <div
        {...{
            className: cx(
                'Page',
                className
            ),
        }}
    >
        {children}
    </div>
)

Page.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Page
