import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ButtonAnimatable from './Animatable'
import './style'

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
