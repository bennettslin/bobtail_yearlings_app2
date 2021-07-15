import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../Button'
import './style'

const SocialMediaButton = forwardRef(({
    className,
    children,
    ...rest
}, ref) => {
    return (
        <Button
            {...{
                ref,
                className: cx(
                    'SocialMediaButton',
                    className,
                ),
                ...rest,
            }}
        >
            {children}
        </Button>
    )
})

SocialMediaButton.propTypes = {
    className: PropTypes.string,
    handleButtonClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default SocialMediaButton
