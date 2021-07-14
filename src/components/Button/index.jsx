import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style'
import ButtonAnimatable from './Animatable'

const Button = ({
    className,
    children,
}) => (
    <button
        {...{
            className: cx(
                'Button',
                className
            ),
        }}
    >
        <ButtonAnimatable>
            {children}
        </ButtonAnimatable>
    </button>
)

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Button
