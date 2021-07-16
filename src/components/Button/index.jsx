import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { Link } from 'gatsby'
import ButtonAnimatable from './Animatable'
import Tooltip from './Tooltip'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'
import './style'

const Button = forwardRef(({
    className,
    pageLink,
    tooltipId,
    tooltipText,
    isTooltipSuccess,
    handleButtonClick = () => {},
    handleTooltipHide = () => {},
    children,
}, ref) => {
    const
        dispatch = useDispatch(),
        Tag = pageLink ? Link : 'button',
        isTooltipEnabled = Boolean(tooltipId)

    const onClick = e => {
        if (pageLink) {
            dispatch(updateSelectedPage(pageLink))
        }

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
                to: getPathForPage(pageLink),
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
    pageLink: PropTypes.string,
    tooltipId: PropTypes.string,
    tooltipText: PropTypes.string,
    isTooltipShown: PropTypes.bool,
    isTooltipSuccess: PropTypes.bool,
    handleButtonClick: PropTypes.func,
    handleTooltipHide: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Button
