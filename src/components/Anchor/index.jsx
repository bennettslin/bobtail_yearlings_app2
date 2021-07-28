import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { updateSelectedPage } from '../../redux/page/action'
import { getPathForPage } from '../../constants/pages'
import './style'

const Anchor = ({
    className,
    gaLabel,
    href,
    pageLink,
    children,

}) => {
    const
        dispatch = useDispatch(),
        Tag = pageLink ? Link : 'a'

    const onClick = () => {
        if (pageLink) {
            dispatch(updateSelectedPage(pageLink))
        }

        if (gaLabel || pageLink) {
            logEvent(
                'Anchor',
                gaLabel || pageLink,
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
                ...href && {
                    href,
                    target: '_blank',
                },
                ...pageLink && {
                    to: getPathForPage(pageLink),
                },
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
    pageLink: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
