import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import ButtonAnimatable from './Animatable'
import './style'

const Button = ({
    className,
    to,
    children,
}) => {
    const Tag = to ? Link : 'button'

    return (
        <Tag
            {...{
                className: cx(
                    'Button',
                    className
                ),
                to,
            }}
        >
            <ButtonAnimatable>
                {children}
            </ButtonAnimatable>
        </Tag>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button
