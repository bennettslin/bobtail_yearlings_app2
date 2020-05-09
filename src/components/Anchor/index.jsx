import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import './style.scss'

const Anchor = ({
    className,
    href,
    onClick,
    children
}) => (
    <a
        {...{
            className: cx(
                'Anchor',
                className
            ),
            href,
            target: '_blank',
            onClick
        }}
    >
        {children}
    </a>
)

Anchor.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}

export default Anchor
