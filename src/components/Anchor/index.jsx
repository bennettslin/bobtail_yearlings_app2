import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style'

const Anchor = ({
    className,
    gaLabel,
    href,
    children,

}) => {
    const onClick = () => {
        if (gaLabel) {
            logEvent(
                'Anchor',
                gaLabel,
            )
        }
    }

    return (
        <a
            {...{
                className: cx(
                    'Anchor',
                    className
                ),
                href,
                target: '_blank',
                onClick,
            }}
        >
            {children}
        </a>
    )
}

Anchor.propTypes = {
    className: PropTypes.string,
    gaLabel: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
