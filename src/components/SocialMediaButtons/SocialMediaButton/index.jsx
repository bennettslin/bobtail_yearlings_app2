import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

// eslint-disable-next-line no-unused-vars
const SocialMediaButton = ({ className, children }) => {
    return (
        <Button
            {...{
                className: cx(
                    'SocialMediaButton',
                    className,
                ),
            }}
        >
            {children}
        </Button>
    )
}

SocialMediaButton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default SocialMediaButton
