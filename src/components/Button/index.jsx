import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import './style'

const Button = forwardRef(({
    className,
    to,
    tooltipId,
    tooltipText,
    isTooltipSuccess,
    handleButtonClick = () => {},
    handleTooltipHide = () => {},
    children,
}, ref) => {
    const
        Tag = to ? Link : 'button',
        isTooltipEnabled = Boolean(tooltipId)

    const onClick = e => {
        handleButtonClick(e)
    }

    return (
        <Tag
            {...{
                ref,
                className: cx(
                    'Button',
                    className
                ),
                to,
                onClick,
                ...isTooltipEnabled && {
                    'data-for': tooltipId,
                    'data-tip': tooltipText,
                },
            }}
        >
            <ButtonAnimatable>
                {children}
            </ButtonAnimatable>
            {isTooltipEnabled && (
                <Tooltip
                    {...{
                        tooltipId,
                        isTooltipSuccess,
                        handleTooltipHide,
                    }}
                />
            )}
        </Tag>
    )
})

Button.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleTooltipHide: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button
