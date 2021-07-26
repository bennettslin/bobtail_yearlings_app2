import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './style'

const Anchor = ({
    className,
    gaLabel,
    href,
    to,
    children,

}) => {
    const Tag = to ? Link : 'a'

    const onClick = () => {
        if (gaLabel || to) {
            logEvent(
                'Anchor',
                gaLabel || to,
            )
        }
    }

    return (
        <Tag
            {...{
                className: cx(
                    'Anchor',
                    className
                ),
                href,
                to,
                target: '_blank',
                onClick,
            }}
        >
            {children}
        </Tag>
    )
}

Anchor.propTypes = {
    className: PropTypes.string,
    gaLabel: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
